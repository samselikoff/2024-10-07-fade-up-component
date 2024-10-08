import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Smartphone, Zap, Shield } from "lucide-react";
import image from "./image.jpg";
import { FadeIn } from "@/app/page";

export default function MarketingHomepage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="flex h-20 items-center border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link className="flex items-center justify-center" href="#">
            <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-300" />
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
              AppName
            </span>
          </Link>
          <nav className="flex gap-8">
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex gap-12">
              <div className="flex w-1/2 flex-col justify-center space-y-6">
                <FadeIn delay={0.2}>
                  <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
                    Revolutionize Your Mobile Experience
                  </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="max-w-md text-xl text-gray-600 dark:text-gray-300">
                    Discover a new way to interact with your smartphone. Our app
                    brings cutting-edge features to your fingertips.
                  </p>
                </FadeIn>
                <FadeIn delay={1}>
                  <div className="max-w-md space-y-4">
                    <form className="flex space-x-2">
                      <Input
                        className="flex-1"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <Button
                        type="submit"
                        className="bg-purple-600 text-white hover:bg-purple-700"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Start your free trial. No credit card required.
                    </p>
                  </div>
                </FadeIn>
              </div>
              <div className="flex w-1/2 items-center justify-center">
                <FadeIn delay={1}>
                  <div className="relative h-[43rem] w-[21rem]">
                    <Image
                      src={image.src}
                      // src="/placeholder.svg?height=700&width=350"
                      alt="App mockup"
                      className="rounded-3xl object-cover shadow-2xl"
                      // fill
                      height={image.height}
                      width={image.width}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-purple-100 py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold text-purple-800 dark:text-purple-300">
              Key Features
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center space-y-4 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-700">
                  <div className="rounded-full bg-purple-600 p-3">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    Lightning Fast
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Experience unparalleled speed with our optimized
                    performance.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.6}>
                <div className="flex flex-col items-center space-y-4 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-700">
                  <div className="rounded-full bg-purple-600 p-3">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    User-Friendly
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Intuitive design ensures a smooth and enjoyable user
                    experience.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.9}>
                <div className="flex flex-col items-center space-y-4 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-700">
                  <div className="rounded-full bg-purple-600 p-3">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    Secure & Private
                  </h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    Your data is protected with state-of-the-art encryption and
                    privacy features.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-4xl font-bold text-white">
                Ready to Transform Your Mobile Experience?
              </h2>
              <p className="max-w-2xl text-xl text-purple-100">
                Join thousands of satisfied users and download our app today.
              </p>
              <div className="w-96 space-y-4">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1 bg-white dark:bg-gray-800"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-white text-purple-600 hover:bg-purple-50"
                  >
                    Download Now
                  </Button>
                </form>
                <p className="text-sm text-purple-100">
                  Available on iOS and Android. Free to download.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-purple-50 py-8 dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 AppName Inc. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link
              className="text-sm text-gray-600 underline-offset-4 hover:underline dark:text-gray-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-600 underline-offset-4 hover:underline dark:text-gray-400"
              href="#"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
