import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from "crypto";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const { RAZORPAY_KEY_SECRET } = process.env;

  if (!RAZORPAY_KEY_SECRET) {
    return res.status(500).json({ error: "Razorpay keys are not configured" });
  }

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const expected = crypto
    .createHmac("sha256", RAZORPAY_KEY_SECRET as string)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expected === razorpay_signature) {
    return res.status(200).json({ verified: true, payment_id: razorpay_payment_id });
  } else {
    return res.status(400).json({ verified: false, error: "Signature mismatch" });
  }
}
