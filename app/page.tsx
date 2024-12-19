'use client'
import GradualSpacing from "@/components/ui/gradual-spacing";
import RetroGrid from "@/components/ui/retro-grid"
import BlurFade from "@/components/ui/blur-fade";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button"
import { WavesIcon, MenuIcon, XIcon, SparklesIcon, PhoneIcon, HomeIcon } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from 'next/image'
import { useTheme } from "next-themes";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Tabs } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card";
import { Card as CarouselCard } from "@/components/ui/apple-cards-carousel";
import { Card as CardHoverEffect } from "@/components/ui/card-hover-effect";
import { CheckCircleIcon } from 'lucide-react'
import { HoverCard } from "@/components/ui/hover-card";

export default function LandingPage() {
  const { theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      name: "Features",
      link: "#features",
      icon: <SparklesIcon className="h-4 w-4" />,
    },
    {
      name: "How It Works",
      link: "#how-it-works",
      icon: <HomeIcon className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <PhoneIcon className="h-4 w-4" />,
    },
  ]

  const featureTabs = [
    {
      title: "Pure Water",
      value: "pure-water",
      content: (
        <HoverCard>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/assets/pure-water.jpg"
                alt="Pure Water"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold dark:text-white">99.9% Purification</h3>
              <p className="text-gray-500 dark:text-gray-400">
                State-of-the-art filtration technology ensures the highest quality water for your family.
              </p>
              <ul className="space-y-3">
                {["99.9% purification", "Mineral-rich", "Great taste"].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HoverCard>
      )
    },
    {
      title: "Home Delivery",
      value: "home-delivery",
      content: (
        <HoverCard>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/assets/home-delivery.jpg"
                alt="Home Delivery"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold dark:text-white">Convenient Service</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Convenient doorstep delivery brings clean water directly to your home.
              </p>
              <ul className="space-y-3">
                {["Convenient", "Direct to home", "Clean water"].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HoverCard>
      )
    },
    {
      title: "Sustainable",
      value: "sustainable",
      content: (
        <HoverCard>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/assets/sustainable-packaging.jpg"
                alt="Sustainable"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold dark:text-white">Eco-Friendly Packaging</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Eco-friendly packaging and a robust recycling program to minimize environmental impact.
              </p>
              <ul className="space-y-3">
                {["Eco-friendly", "Recycling", "Minimize impact"].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HoverCard>
      )
    }
  ];

  const workflowCards = [
    {
      category: "Step 1",
      title: "Order Online",
      value: "step-1",
      src: "/assets/pexels-rdne-6647110.jpg",
      content: (
        <Card className="bg-white dark:bg-gray-900">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/assets/pexels-rdne-6647110.jpg"
                alt="Order Online"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold dark:text-white">Step 1: Order Online</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Choose your water plan and schedule deliveries through our easy-to-use platform.
              </p>
            </div>
          </div>
        </Card>
      )
    },
    {
      category: "Step 2",
      title: "We Purify",
      value: "step-2",
      src: "/assets/pexels-pixabay-416528.jpg",
      content: (
        <Card className="bg-white dark:bg-gray-900">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/assets/pexels-pixabay-416528.jpg"
                alt="We Purify"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold dark:text-white">Step 2: We Purify</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our advanced purification technology ensures the highest quality water.
              </p>
            </div>
          </div>
        </Card>
      )
    },
    {
      category: "Step 3",
      title: "Home Delivery",
      value: "step-3",
      src: "/assets/pexels-rdne-6646876.jpg",
      content: (
        <Card className="bg-white dark:bg-gray-900">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/2 aspect-square">
              <Image
                src="/assets/pexels-rdne-6646876.jpg"
                alt="Home Delivery"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold dark:text-white">Step 3: Home Delivery</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Convenient doorstep delivery brings clean water directly to your home.
              </p>
            </div>
          </div>
        </Card>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-950">
      <header className={`px-4 lg:px-6 h-16 flex items-center fixed w-full z-40 transition-all duration-300 
        ${scrollY > 0 
          ? "bg-white dark:bg-gray-950 shadow-md dark:shadow-gray-800" 
          : "bg-transparent"}`}>
        <Link className="flex items-center justify-center" href="#">
          <WavesIcon className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">AquaPure</span>
        </Link>
        <Button
          className="ml-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </Button>
      </header>

      <FloatingNav 
        navItems={navItems} 
        className="hidden md:flex"
      />

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="text-2xl font-medium hover:text-blue-600 transition-colors dark:text-white dark:hover:text-blue-400"
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </span>
              </Link>
            ))}
            <Button 
              onClick={() => setIsMenuOpen(false)}
              className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
          <RetroGrid 
            className="opacity-30" 
            angle={55} 
            cellSize={40} 
            lightLineColor={theme === 'dark' ? '#1e3a8a' : '#2563eb'} 
            darkLineColor={theme === 'dark' ? '#164e63' : '#0891b2'} 
          />
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <BlurFade className="space-y-2">
                <h1>
                  <GradualSpacing
                    text="Pure Water for Every Home"
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
                  />
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AquaPure is revolutionizing access to clean water. Our innovative platform ensures every household
                  can enjoy pure, safe water with ease.
                </p>
              </BlurFade>
              <BlurFade className="space-x-4" delay={0.2}>
                <InteractiveHoverButton 
                  text="Get Started" 
                  className="w-40 bg-blue-600 text-white hover:text-white border-blue-600"
                />
                <Button size="lg" variant="outline">Learn More</Button>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-32 md:py-40 lg:py-48 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <BlurFade>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-20 dark:text-white">
                How It Works
              </h2>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="flex flex-wrap justify-center gap-12 mt-8">
                {workflowCards.map((card, index) => (
                  <CarouselCard
                    key={card.title}
                    card={card}
                    index={index}
                    layout={true}
                  />
                ))}
              </div>
            </BlurFade>
          </div>
        </section>
        <section id="features" className="w-full py-32 md:py-40 lg:py-48 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <BlurFade>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-20 dark:text-white">
                Our Features
              </h2>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <HoverCard>
                  <div className="space-y-8">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/assets/purewater.jpg"
                        alt="Pure Water"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold dark:text-white">99.9% Purification</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        State-of-the-art filtration technology ensures the highest quality water for your family.
                      </p>
                      <ul className="space-y-3">
                        {["99.9% purification", "Mineral-rich", "Great taste"].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCard>

                <HoverCard>
                  <div className="space-y-8">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/assets/home-delivery.jpg"
                        alt="Home Delivery"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold dark:text-white">Home Delivery</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Convenient doorstep delivery brings clean water directly to your home.
                      </p>
                      <ul className="space-y-3">
                        {["Scheduled deliveries", "Contactless options", "Flexible plans"].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCard>

                <HoverCard>
                  <div className="space-y-8">
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/assets/sustainable-packaging.jpg"
                        alt="Sustainable Packaging"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold dark:text-white">Sustainable Packaging</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Eco-friendly packaging and a robust recycling program to minimize environmental impact.
                      </p>
                      <ul className="space-y-3">
                        {["100% recyclable", "Reusable containers", "Reduced waste"].map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </HoverCard>
              </div>
            </BlurFade>
          </div>
          <div className="h-20" /> {/* Extra spacing at bottom */}
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <BlurFade className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready for Pure Water?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers and experience the difference of AquaPure today.
                </p>
              </BlurFade>
              <BlurFade className="w-full max-w-sm space-y-2" delay={0.2}>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50" size="lg">
                  Get Started Now
                </Button>
              </BlurFade>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">Products</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Water Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Filtration Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Shipping & Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold dark:text-white">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 AquaPure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

