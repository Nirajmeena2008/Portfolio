import { useState } from "react";
import { motion } from "motion/react";
import { IndianRupee } from "lucide-react";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (response: Record<string, string>) => void) => void;
    };
  }
}

type Status = "idle" | "loading" | "success" | "error";

export function Payment() {
  const [amount, setAmount] = useState(500);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handlePayment = async () => {
    setStatus("loading");
    setMessage("");

    try {
      // 1. Create order
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }), // rupees → paise
      });

      if (!orderRes.ok) {
        throw new Error("Failed to create order");
      }

      const { order_id, currency } = await orderRes.json();

      // 2. Open Razorpay modal
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID ,
        amount: amount * 100,
        currency,
        name: "Aperture Portfolio",
        description: "Payment",
        order_id,
        handler: async (response: Record<string, string>) => {
          // 3. Verify payment
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const data = await verifyRes.json();
            if (data.verified) {
              setStatus("success");
              setMessage(`Payment verified! ID: ${data.payment_id}`);
            } else {
              setStatus("error");
              setMessage("Payment verification failed.");
            }
          } catch {
            setStatus("error");
            setMessage("Verification request failed.");
          }
        },
        modal: {
          ondismiss: () => setStatus("idle"),
        },
        theme: { color: "#171717" },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", () => {
        setStatus("error");
        setMessage("Payment failed. Please try again.");
      });
      rzp.open();
    } catch {
      setStatus("error");
      setMessage("Could not initiate payment.");
    }
  };

  return (
    <section className="bg-neutral-950 text-white py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
            Support My Work
          </h2>
          <p className="text-neutral-400 mb-8">
            If you like what I do, consider supporting me.
          </p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <IndianRupee size={20} className="text-neutral-400" />
            <input
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(Math.max(1, Number(e.target.value)))}
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 w-32 text-center text-white focus:outline-none focus:border-neutral-600 transition-colors"
            />
          </div>

          <button
            onClick={handlePayment}
            disabled={status === "loading"}
            className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Processing..." : `Pay ₹${amount}`}
          </button>

          {message && (
            <p
              className={`mt-4 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
            >
              {message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
