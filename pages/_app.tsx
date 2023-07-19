import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Refresh } from "@/components/Animate/Refresh";
import Mouse from "@/components/Animate/Mouse";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  return (
    <div className="overflow-x-hidden">
      <main className={inter.className}>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0,100% 0,100% 100%, 0% 100%)",
              },
              exitState: {
                opacity: 0,
                clipPath: "polygon(50% 0,50% 0,50% 100%, 50% 100%)",
              },
            }}
          >
            <Refresh onClick={() => setCount(count + 1)} />
            <Mouse key={count} />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
