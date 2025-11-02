"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoadingBar } from "../hooks/use-loading-bar";
import { Progress } from "@/components/ui/progress";
// import { useEffect } from "react";

export function LoadingProgress() {
  const { isVisible, progress } = useLoadingBar();

  // useEffect(() => {
    
  //   console.log("progress >>> ", progress);
    
  // }, [progress])
  

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
            className="h-[2px] [&>div]:bg-blue-600 transition-all duration-200"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
