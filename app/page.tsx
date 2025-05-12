"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, TrendingUp, Shield, Download, Star, CheckCircle, Play, Calculator, Lock } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("how-it-works")

  // Simple animation tracking
  const [animated, setAnimated] = useState({
    hiw1: false,
    hiw2: false,
    hiw3: false,
    ps1: false,
    ps2: false,
    ps3: false,
    ka1: false,
    ka2: false,
    ka3: false,
    ka4: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Simple animation based on scroll position
      const sections = document.querySelectorAll(".animate-item")
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const id = section.id

        if (rect.top < window.innerHeight - 100) {
          setAnimated((prev) => ({ ...prev, [id]: true }))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check for elements in view
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle tab changes
  useEffect(() => {
    // Reset animations when tab changes
    setTimeout(() => {
      const sections = document.querySelectorAll(".animate-item")
      sections.forEach((section) => {
        const id = section.id
        setAnimated((prev) => ({ ...prev, [id]: true }))
      })
    }, 100)
  }, [activeTab])

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-slate-800 backdrop-blur transition-all duration-200",
          isScrolled ? "bg-slate-950/95 supports-[backdrop-filter]:bg-slate-950/80" : "bg-slate-950",
        )}
      >
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <TrendingUp className="h-6 w-6 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Trade Lot Tool
            </span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#features"
                className="text-sm font-medium text-slate-400 transition-colors hover:text-purple-400"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-slate-400 transition-colors hover:text-purple-400"
              >
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium text-slate-400 transition-colors hover:text-purple-400">
                FAQ
              </Link>
            </nav>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Extension
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-purple-800 bg-purple-950/50 text-purple-400 w-fit">
                  <span>TradingView Extension</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    No More Incorrect Lots. No More Losses.
                  </h1>
                  <p className="max-w-[600px] text-slate-400 md:text-xl">
                    The trading tool you've been waiting for. Protect your account with our Chrome extension that
                    prevents costly mistakes - seamlessly integrated with TradingView.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Download className="mr-2 h-4 w-4" /> Install Extension
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        variant="outline"
                        className="gap-1 border-purple-800 text-purple-400 hover:bg-purple-950/50"
                      >
                        <Play className="h-4 w-4" /> Watch Demo
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                        <iframe
                          src="https://player.vimeo.com/video/1083105159?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                          title="Trade Lot Tool"
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <Star className="mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="text-slate-400">5-star rating from 200+ traders</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
                  <div className="h-full w-full flex items-center justify-center">
                    <img
                      src="/images/trade-lot-calculator-tool-new.png"
                      alt="Trade Lot Calculator Tool for TradingView Chrome Extension"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-950/50 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Protect Your Trading Account
                </h2>
              </div>
            </div>

            <Tabs
              defaultValue="how-it-works"
              className="mt-12 w-full max-w-4xl mx-auto"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                <TabsTrigger
                  value="how-it-works"
                  className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  How It Works
                </TabsTrigger>
                <TabsTrigger
                  value="position"
                  className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  Position Sizing
                </TabsTrigger>
                <TabsTrigger
                  value="key-advantages"
                  className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  Key Advantages
                </TabsTrigger>
              </TabsList>
              <TabsContent value="how-it-works" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative h-[550px] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl flex items-center justify-center">
                    <img
                      src="/images/trade-lot-logo-2.png"
                      alt="Trading Chart with Markup"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-purple-400">How It Works</h3>
                    <ul className="space-y-6">
                      <li
                        id="hiw1"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 ${animated.hiw1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Mark Up Your Trade</h4>
                          <p className="text-slate-400">
                            Use TradingView's markup tool to define your entry, stop loss, and take profit levels.
                          </p>
                        </div>
                      </li>
                      <li
                        id="hiw2"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-150 ${animated.hiw2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Activate the Markup Tool</h4>
                          <p className="text-slate-400">
                            Click the TradingView markup tool to automatically extract all relevant data from your
                            chart.
                          </p>
                        </div>
                      </li>
                      <li
                        id="hiw3"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-300 ${animated.hiw3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Get Your Lot Size</h4>
                          <p className="text-slate-400">
                            Instantly receive your optimal lot size—calculated based on your balance and risk settings.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="position" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative h-[550px] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-xl flex items-center justify-center">
                    <img
                      src="/images/trade-lot-logo.png"
                      alt="Trade Lot Tool Interface"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-purple-400">Precise Position Sizing</h3>
                    <p className="text-slate-400">
                      Never trade with incorrect lot sizes again. Our position calculator ensures you're always risking
                      exactly what you intend. As the only dedicated position sizing tool fully integrated with
                      TradingView, we've helped thousands of traders protect their capital and trade with confidence.
                    </p>
                    <ul className="space-y-2">
                      <li
                        id="ps1"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 ${animated.ps1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">Automatic lot size calculation</span>
                      </li>
                      <li
                        id="ps2"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-150 ${animated.ps2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">Account currency conversion</span>
                      </li>
                      <li
                        id="ps3"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-300 ${animated.ps3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">Stop-loss distance factored in</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="key-advantages" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="relative h-[550px] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl flex items-center justify-center">
                    <img
                      src="/images/trade-lot-logo-3.png"
                      alt="Trader using mobile app"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-purple-400">Key Advantages</h3>
                    <ul className="space-y-6">
                      <li
                        id="ka1"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 ${animated.ka1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Automated Lot Size Calculation</h4>
                          <p className="text-slate-400">
                            Effortlessly calculate lot sizes using your chart markup—no manual entry required.
                          </p>
                        </div>
                      </li>
                      <li
                        id="ka2"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-150 ${animated.ka2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Seamless TradingView Integration</h4>
                          <p className="text-slate-400">
                            Built to work directly within TradingView. No switching apps or copying data.
                          </p>
                        </div>
                      </li>
                      <li
                        id="ka3"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-300 ${animated.ka3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Smart Risk Management</h4>
                          <p className="text-slate-400">
                            Set your account balance and risk percentage once—our tool handles the rest.
                          </p>
                        </div>
                      </li>
                      <li
                        id="ka4"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-450 ${animated.ka4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Trade Efficiently</h4>
                          <p className="text-slate-400">
                            Save time and reduce errors. Whether you're a beginner or a pro, this tool keeps you focused
                            on execution.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-950">
                  <Calculator className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Precise Position Sizing</h3>
                <p className="text-slate-400">
                  Calculate exact position sizes based on your risk tolerance and account balance.
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-950">
                  <Lock className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Risk Warnings</h3>
                <p className="text-slate-400">
                  Get instant alerts when you're about to make a trade that exceeds your risk parameters.
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-950">
                  <Shield className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Account Protection</h3>
                <p className="text-slate-400">
                  Set maximum daily and weekly loss limits to prevent catastrophic drawdowns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-950/50 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Simple, Affordable Pricing
                </h2>
                <p className="max-w-[600px] text-slate-400 md:text-xl mx-auto">
                  The trading tool you've been waiting for - the only one seamlessly integrated with Chrome and
                  TradingView
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-md">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-200">Free</h3>
                  <p className="text-slate-400">Try it out with limited access</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-slate-200">
                  $0
                  <span className="ml-1 text-sm font-medium text-slate-400">/forever</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Access to EURUSD only</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Basic position sizing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Risk calculation</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-slate-800 hover:bg-slate-700 text-slate-200">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-xl border border-indigo-700 bg-slate-900 p-6 shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                  Best Value
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-200">Full Access</h3>
                  <p className="text-slate-400">Complete protection for all instruments</p>
                </div>
                            <div className="mt-4 flex items-baseline text-3xl font-bold text-slate-200">
              <span className="text-xl font-normal text-slate-500 line-through mr-2">$10.97</span>
              $2.97
              <span className="ml-1 text-sm font-medium text-slate-400">/month</span>
            </div>
                </div>
                <p className="mt-2 text-sm text-purple-400 italic">Cheaper than a coffee!</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Access to ALL instruments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Advanced position sizing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Complete risk management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Priority support</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-indigo-600 hover:bg-indigo-700">Get Full Access</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-950/50 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                {/* New FAQ Item 1 */}
                <AccordionItem value="item-1" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    I purchased a subscription but haven't received my license key. What should I do?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    1. Check all email folders (Spam, Junk, Promotions).<br />
                    2. If not found, email support@trade-lot.com using your purchase email.<br />
                    3. We’ll manually verify and send your key within 24 hours.
                  </AccordionContent>
                </AccordionItem>
                {/* New FAQ Item 2 */}
                <AccordionItem value="item-2" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    What happens if I cancel my subscription?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Your license key is linked to your subscription. If you cancel, it will be deactivated. To regain access, a new subscription is required.
                  </AccordionContent>
                </AccordionItem>
                {/* New FAQ Item 3 */}
                <AccordionItem value="item-3" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    Is there a free version?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes! The Trade Lot Tool is free to use on EURUSD. A subscription unlocks all other symbols and it is cheaper than a coffee.
                  </AccordionContent>
                </AccordionItem>
                {/* Existing FAQ Item 1 - now item-4 */}
                <AccordionItem value="item-4" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    How does the position sizing calculator work?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Our position sizing calculator takes your account balance, risk percentage, and stop-loss distance
                    to calculate the exact position size that keeps your risk within your predetermined limits.
                  </AccordionContent>
                </AccordionItem>
                {/* Existing FAQ Item 2 - now item-5 */}
                <AccordionItem value="item-5" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    Can I customize my risk parameters?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes, you can set your preferred risk percentage per trade, daily and weekly loss limits, and minimum
                    risk-reward ratios. All parameters can be adjusted to match your trading strategy.
                  </AccordionContent>
                </AccordionItem>
                {/* Existing FAQ Item 3 - now item-6 */}
                <AccordionItem value="item-6" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    Does it work with any broker?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Our extension works with any broker that integrates with TradingView. For one-click trading, we
                    currently support major brokers like Interactive Brokers, TradeStation, and more.
                  </AccordionContent>
                </AccordionItem>
                {/* Existing FAQ Item 4 - now item-7 */}
                <AccordionItem value="item-7" className="border-slate-800">
                  <AccordionTrigger className="text-slate-200 hover:text-purple-400">
                    Do you offer a free trial?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    We don't offer a free trial, but at just $2.97 per month (less than a coffee!), our tool is
                    incredibly affordable. You can cancel anytime, and the potential savings are enormous - one
                    prevented mistake can save you hundreds or thousands of dollars in trading losses. Plus, we offer a
                    free version for EURUSD so you can experience the core functionality before upgrading.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Protect Your Trading Account Today
                </h2>
                <p className="max-w-[600px] text-slate-400 md:text-xl">
                  For less than the price of a coffee, eliminate incorrect lot sizes and undesired losses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Download className="mr-2 h-4 w-4" /> Install Extension
                </Button>
              </div>
              <p className="text-sm text-slate-500">No credit card required to try the free version.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-slate-800 bg-slate-950">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <TrendingUp className="h-6 w-6 text-purple-500" />
            <p className="text-center text-sm leading-loose text-slate-400 md:text-left">
              &copy; {new Date().getFullYear()} Trade Lot Tool. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-slate-400 underline-offset-4 hover:text-purple-400">
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-slate-400 underline-offset-4 hover:text-purple-400 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/refund-policy"
              className="text-sm text-slate-400 underline-offset-4 hover:text-purple-400 hover:underline"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
