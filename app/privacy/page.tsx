import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container max-w-3xl py-12 px-4 md:py-24">
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 mb-8">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400">Effective Date: 10/05/2024</p>

          <p className="text-slate-300 mt-6">
            This Privacy Policy explains how Trade Tool ("we", "us", or "our") collects, uses, and protects your
            information when you use our Chrome extension.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">1. Information We Collect</h2>
          <p className="text-slate-300">We may collect:</p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mt-4">
            <li>Basic usage data (e.g., feature usage statistics, error logs)</li>
            <li>Anonymous analytics data to improve functionality</li>
            <li>Email address if provided voluntarily for support or subscription</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-200 mt-8">2. How We Use Your Information</h2>
          <p className="text-slate-300">We use your data to:</p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mt-4">
            <li>Improve and maintain the extension</li>
            <li>Respond to support requests</li>
            <li>Send relevant updates, if opted in</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-200 mt-8">3. Data Sharing</h2>
          <p className="text-slate-300">
            We do not sell or rent your personal data. Information may be shared only with trusted third-party providers
            necessary for service delivery (e.g., payment processors) under strict confidentiality.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">4. Data Security</h2>
          <p className="text-slate-300">
            We implement industry-standard measures to protect your information against loss, theft, or unauthorized
            access.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">5. Your Choices</h2>
          <p className="text-slate-300">You may:</p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mt-4">
            <li>Disable data collection through your browser settings</li>
            <li>
              Request data deletion by contacting us at{" "}
              <a href="mailto:support@trade-lot.com" className="text-purple-400 hover:underline">
                support@trade-lot.com
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-200 mt-8">6. Contact Us</h2>
          <p className="text-slate-300">
            If you have any questions regarding this policy, contact{" "}
            <a href="mailto:support@trade-lot.com" className="text-purple-400 hover:underline">
              support@trade-lot.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
