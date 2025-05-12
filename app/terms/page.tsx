import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="container max-w-3xl py-12 px-4 md:py-24">
        <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-purple-400 mb-8">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400">Effective Date: 10/05/2024</p>

          <p className="text-slate-300 mt-6">
            These Terms govern your use of the Trade Tool Chrome extension ("Service"). By using our Service, you agree
            to comply with these Terms.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">1. License</h2>
          <p className="text-slate-300">
            We grant you a non-transferable, non-exclusive, revocable license to use the Service for personal or
            business use in accordance with these Terms.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">2. User Responsibilities</h2>
          <p className="text-slate-300">You agree not to:</p>
          <ul className="list-disc pl-6 text-slate-300 space-y-2 mt-4">
            <li>Reverse engineer or tamper with the extension</li>
            <li>Use the Service for illegal or unauthorized purposes</li>
            <li>Resell or sublicense the extension without permission</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-200 mt-8">3. Modifications to the Service</h2>
          <p className="text-slate-300">
            We reserve the right to modify or discontinue the Service at any time without prior notice. We are not
            liable for any resulting loss.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">4. Termination</h2>
          <p className="text-slate-300">
            We may suspend or terminate access to the Service if you violate these Terms.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">5. Limitation of Liability</h2>
          <p className="text-slate-300">
            Trade Tool is not liable for any indirect, incidental, or consequential damages resulting from the use or
            inability to use the Service.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">6. Changes to Terms</h2>
          <p className="text-slate-300">
            We may update these Terms from time to time. Continued use of the Service constitutes your acceptance of any
            changes.
          </p>

          <h2 className="text-xl font-bold text-slate-200 mt-8">7. Contact Information</h2>
          <p className="text-slate-300">
            For questions about these Terms, please contact{" "}
            <a href="mailto:support@trade-lot.com" className="text-purple-400 hover:underline">
              support@trade-lot.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
