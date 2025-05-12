import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container max-w-3xl py-12 px-4 md:py-24">
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 mb-8">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Refund Policy
        </h1>

        <div className="prose prose-invert prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-200 mt-8">1. Eligibility for Refunds</h2>
          <p className="text-slate-300">
            We offer refunds for premium services within 7 days of purchase if you are not satisfied. To be eligible,
            you must submit a valid reason detailing why the service did not meet your expectations.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">2. How to Request a Refund</h2>
          <p className="text-slate-300">
            To request a refund, please email our support team at{" "}
            <a href="mailto:support@trade-lot.com" className="text-purple-400 hover:underline">
              support@trade-lot.com
            </a>
            . Our team will review your request and respond within 2–3 business days. Eligible refunds will be processed
            within 5–7 business days to the original payment method.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">3. Non-Refundable Items</h2>
          <p className="text-slate-300">The following are non-refundable:</p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mt-4">
            <li>Partially used premium services</li>
            <li>Special or limited-time promotional offers</li>
            <li>Services marked as "non-refundable" at checkout</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-200 mt-8">4. Subscription Cancellation</h2>
          <p className="text-slate-300">
            You may cancel your subscription at any time. The cancellation will take effect at the end of the current
            billing period. We do not offer partial refunds for unused time.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">5. Payment Disputes</h2>
          <p className="text-slate-300">
            If you notice any unauthorized or incorrect charges, contact us at{" "}
            <a href="mailto:support@trade-lot.com" className="text-purple-400 hover:underline">
              support@trade-lot.com
            </a>{" "}
            immediately. We are committed to resolving disputes fairly and promptly.
          </p>
        </div>
      </div>
    </div>
  )
}
