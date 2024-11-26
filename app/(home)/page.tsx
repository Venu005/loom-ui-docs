"use client";
import { Button } from "@/components/loomui/Button";
import GridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import IconCloud from "@/components/ui/icon-cloud";
import { slugs } from "@/constants/slugs";
import { useEffect, useState } from "react";
import MarqueeAnimation from "@/components/ui/marquee-effect";
import { Github, Twitter, X } from "lucide-react";
function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <main>
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg  bg-background p-20 ">
          <div className="z-10 flex flex-col items-center gap-6">
            <p className="whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter text-black dark:text-white">
              Loom UI
            </p>
            <p className="text-center text-xl text-muted-foreground">
              A collection of accessible UI components for your websites.
            </p>
            <Button asChild>
              <Link href="/docs">Get started</Link>
            </Button>
          </div>
          <GridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
        </div>
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-black dark:text-white">
                  Seamless Integration
                </h3>
                <p className="text-lg mb-6 text-muted-foreground">
                  Loom UI components are designed to work flawlessly with your
                  existing projects. Our flexible API allows for easy
                  customization and extension.
                </p>
                <Button asChild>
                  <Link href="/docs">Explore Docs</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto"
              >
                <pre className="text-sm">
                  <code>{`import { Button } from '@/components/loomui/Button'

function MyComponent() {
  return (
    <Button variant="primary" size="lg">
      Click me!
    </Button>
  )
}`}</code>
                </pre>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto ">
            <div className="">
              {isClient && <IconCloud iconSlugs={slugs} />}
            </div>
            <div className="flex flex-col gap-4 items-center mt-12">
              <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
                Tech Stack
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Loom UI is built with Typescript, React, Next.js, and Tailwind
                CSS.It draws inspiration from shadcn ui.
              </p>
              <Button asChild className="w-fit">
                <Link href="https://github.com/Venu005/loom-ui-cli">
                  Explore CLI tool
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-10 px-6 sm:hidden">
          <MarqueeAnimation baseVelocity={-5}>LOOM UI</MarqueeAnimation>
        </section>
        <footer className="py-10 px-6">
          <div className="max-w-7xl mx-auto flex justify-between">
            <p className="text-left text-muted-foreground">
              Built with ❤️ by{" "}
              <Link
                href="https://github.com/Venu005"
                className="hover:underline hover:text-blue-500"
              >
                @Venu005
              </Link>
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/Venu005/loom-ui">
                <Github className="w-6 h-6" />
              </Link>
              <Link href={"https://x.com/__venusai"}>
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
