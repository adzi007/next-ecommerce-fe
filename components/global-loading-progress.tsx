"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalLoadingProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(30);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Start progress bar immediately when user clicks a link
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");

      if (link && link.href && link.origin === window.location.origin) {
        // Only trigger for internal links
        start();
      }
    };

    const start = () => {
      if (isVisible) return;
      setIsVisible(true);
      setProgress(10);

      timer = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + Math.random() * 10 : prev));
      }, 250);
    };

    const finish = () => {
      clearInterval(timer);
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
    };

    // When route actually changes (detected by pathname)
    finish();

    // Listen to clicks on internal links
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(timer);
    };
  }, [pathname]); // finishes when the route changes

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="progress-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full z-[60]"
        >
          <Progress
            value={progress}
            className="h-[2px] [&>div]:bg-blue-600"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
