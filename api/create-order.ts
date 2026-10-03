import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";
  
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_test_TjLcoGapvgttPB";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "O9AXb0o4Wib04yLyaBvJFMPv";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
    return res.status(500).json({ error: "Razorpay credentials not configured" });
  }

  const { amount } = req.body;

  if (!amount || amount < 100) {
    return res.status(400).json({ error: "Amount must be at least 100 paise" });
  }

  try {
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " +
          Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString("base64"),
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err });
    }

    const order = await response.json();
    res.json({ order_id: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error("Razorpay create-order error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
}