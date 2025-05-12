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
  const [activeTab, setActiveTab] = useState("position")

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

  const testimonials = [
    {
      name: "John T.",
      role: "Beginner Trader",
      text: "I used to guess my lot size or just copy what others were doing. Since I installed this extension, I finally understand how to calculate risk properly without overthinking it. Game changer!",
      stars: 5,
    },
    {
      name: "Elena R.",
      role: "Experienced Day Trader",
      text: "Risk management is everything, and this tool lets me execute position sizing directly inside TradingView without switching tabs. It's simple but powerful.",
      stars: 5,
    },
    {
      name: "Kevin B.",
      role: "Intermediate Trader",
      text: "Honestly, I didn’t realize how often I was risking more than 2% until I started using this. Now I feel more in control of my trades.",
      stars: 5,
    },
    {
      name: "Fatima D.",
      role: "Forex Newbie",
      text: "This tool helped me understand the relationship between stop loss, account size, and lot size. I’m still learning, but it makes everything easier to apply in real time.",
      stars: 5,
    },
    {
      name: "Alex S.",
      role: "Funded Prop Trader",
      text: "When you're managing larger accounts, precision matters. This tool eliminates human error when calculating lot size, especially under pressure.",
      stars: 5,
    },
    {
      name: "Diego M.",
      role: "Swing Trader",
      text: "I used to rely on mobile apps or calculators. Now I just draw on the chart and the tool does the rest. Super smooth workflow!",
      stars: 5,
    },
    {
      name: "Nina K.",
      role: "Beginner, Demo Account",
      text: "I'm still on demo, but this tool has helped me build better habits. I now plan every trade with risk in mind, not just targets.",
      stars: 5,
    },
    {
      name: "Jason L.",
      role: "Full-Time Trader",
      text: "Been trading for over 6 years and this is one of the few tools I’ve added that actually improves my discipline. Clean, fast, and reliable.",
      stars: 5,
    },
    {
      name: "Priya S.",
      role: "Learning Risk Management",
      text: "I was never sure how much to risk per trade, but now it’s crystal clear. Love how it integrates with TradingView so naturally.",
      stars: 5,
    },
    {
      name: "Marc W.",
      role: "Crypto Trader",
      text: "Trading volatile markets like crypto requires tight risk control. This extension keeps me accountable to my risk rules every single trade.",
      stars: 5,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

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

    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
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
        )}>
        <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4 md:px-6">
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
              <Link
                href="#testimonials"
                className="text-sm font-medium text-slate-400 transition-colors hover:text-purple-400"
              >
                Testimonials
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
          <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 md:px-6">
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
                      src="/images/hero-main-image.png"
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
          <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 md:px-6">
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
              defaultValue="position"
              className="mt-12 w-full max-w-4xl mx-auto"
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                <TabsTrigger
                  value="position"
                  className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  Position Sizing
                </TabsTrigger>
                <TabsTrigger
                  value="how-it-works"
                  className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
                >
                  How It Works
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
                  <div className="relative h-[550px] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 shadow-xl flex items-center justify-center">
                    <img
                      src="/images/trade-lot-tool-3.png"
                      alt="Trade Lot Tool Key Advantages"
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
                        <Shield className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Protect Your Capital</h4>
                          <p className="text-slate-400">
                            Avoid costly mistakes by ensuring every trade adheres to your risk management rules.
                          </p>
                        </div>
                      </li>
                      <li
                        id="ka2"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-150 ${animated.ka2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <Calculator className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Seamless Integration</h4>
                          <p className="text-slate-400">
                            Works directly within your TradingView interface, no need to switch to external calculators.
                          </p>
                        </div>
                      </li>
                      <li
                        id="ka3"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-300 ${animated.ka3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Build Discipline</h4>
                          <p className="text-slate-400">
                            Reinforce good trading habits by consistently applying proper position sizing.
                          </p>
                        </div>
                      </li>
                      <li
                        id="ka4"
                        className={`flex items-start gap-2 animate-item transition-all duration-700 delay-450 ${animated.ka4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      >
                        <Lock className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-slate-200">Trade with Confidence</h4>
                          <p className="text-slate-400">
                            Know that your risk is managed on every trade, allowing you to focus on your strategy.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 bg-slate-950">
          <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-purple-950/50 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                Pricing Plans
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that’s right for you. Get started for free or unlock full power with our Pro plan.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm gap-8 lg:max-w-4xl lg:grid-cols-2 xl:max-w-5xl xl:grid-cols-3 items-start">
              <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-300">Free</h3>
                  <div className="flex items-baseline text-3xl font-bold text-slate-200">
                    $0
                    <span className="ml-1 text-sm font-medium text-slate-400">/month</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-500">Basic features to get you started.</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Basic Lot Size Calculation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Manual Data Input</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Community Support</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-8 w-full border-purple-800 text-purple-400 hover:bg-purple-950/50">
                  Get Started Free
                </Button>
              </div>

              <div className="rounded-lg border-2 border-purple-600 bg-slate-900 p-6 shadow-xl relative">
                <div className="absolute top-0 right-0 -mt-3 mr-3">
                  <div className="inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white">
                    Best Value
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-purple-400">Full Access</h3>
                   <div className="mt-4 flex items-baseline text-3xl font-bold text-slate-200">
                      <span className="text-xl font-normal text-slate-500 line-through mr-2">$10.97</span>
                      $2.97
                      <span className="ml-1 text-sm font-medium text-slate-400">/month</span>
                    </div>
                </div>
                <p className="mt-2 text-sm text-purple-400 italic">Cheaper than a coffee!</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">All Free Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Automatic Data Extraction from Chart</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Account Currency Conversion</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Save Default Settings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Priority Support</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Go Pro
                </Button>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-xl lg:col-span-1 xl:col-auto">
                 <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-300">Lifetime</h3>
                  <div className="flex items-baseline text-3xl font-bold text-slate-200">
                    $49
                    <span className="ml-1 text-sm font-medium text-slate-400">/onetime</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-500">One payment, lifetime access.</p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">All Pro Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Lifetime Updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span className="text-slate-300">Exclusive Community Access</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-8 w-full border-purple-800 text-purple-400 hover:bg-purple-950/50">
                  Get Lifetime Access
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION START */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-slate-900">
          <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-purple-950/50 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                What Our Users Are Saying
              </h2>
            </div>

            <div className="relative w-full overflow-hidden animation-pause-hover group">
              <div className="flex animate-scroll group-hover:animation-play-state-paused">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 h-full flex flex-col min-h-[280px]">
                      <div className="flex mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(5 - testimonial.stars)].map((_, i) => (
                          <Star key={`empty-${i}`} className="h-5 w-5 text-slate-600" />
                        ))}
                      </div>
                      <p className="text-slate-300 text-sm mb-4 flex-grow">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-slate-200 text-sm">{testimonial.name}</p>
                        {testimonial.role && <p className="text-xs text-slate-400">{testimonial.role}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIALS SECTION END */}

        <section id="faq" className="w-full py-12 md:py-24 bg-slate-950">
          <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-950/50 px-3 py-1 text-sm text-purple-400 border border-purple-800">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We've got answers. If you don't find what you're looking for, feel free to reach
                  out.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-3xl w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:text-purple-400">What is Trade Lot Tool?</AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Trade Lot Tool is a Chrome extension designed for TradingView that helps traders accurately
                    calculate their position size (lot size) based on their account balance, risk percentage, and
                    stop-loss distance. It aims to prevent costly mistakes from incorrect lot sizing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:text-purple-400">How does it work with TradingView?</AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    The extension seamlessly integrates with TradingView. You mark your entry, stop-loss, and
                    take-profit on your chart using TradingView's tools. The extension then automatically extracts
                    this data to calculate the correct lot size without you needing to leave your chart or use
                    external calculators.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:text-purple-400">Is it easy to use for beginners?</AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Yes! It's designed to be intuitive for both beginners and experienced traders. It simplifies a
                    crucial aspect of risk management and helps new traders build good habits from the start.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="hover:text-purple-400">What are the benefits of using this tool?</AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    Key benefits include protecting your trading capital, saving time, improving trading discipline,
                    reducing errors in lot size calculation, and trading with more confidence knowing your risk is
                    managed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="hover:text-purple-400">Do I need to pay to use it?</AccordionTrigger>
                  <AccordionContent className="text-slate-400">
                    There is a free version with basic features. For advanced features like automatic data extraction
                    from charts, account currency conversion, and saving default settings, we offer a Pro plan and a
                    Lifetime access option.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-t from-slate-950 to-slate-900">
          <div className="container mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Ready to Trade Smarter?
              </h2>
              <p className="mx-auto max-w-[600px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stop guessing your lot sizes and start protecting your capital. Install the Trade Lot Tool extension
                today and take control of your trading risk.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                <Download className="mr-2 h-4 w-4" /> Install Free Extension
              </Button>
              <p className="text-xs text-slate-500">
                Get started in minutes. Secure your trades.
                <Link href="#pricing" className="underline underline-offset-2 text-purple-400 hover:text-purple-300">
                  View Pricing
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-slate-800 bg-slate-950">
        <p className="text-xs text-slate-500">&copy; 2024 Trade Lot Tool. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-400 hover:text-purple-400">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-400 hover:text-purple-400">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

