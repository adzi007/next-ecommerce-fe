"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLoadingBar } from "../hooks/use-loading-bar"; 

export function RouteChangeHandler() {
  const pathname = usePathname();
  const { finish } = useLoadingBar();

  useEffect(() => {
    finish();
  }, [pathname, finish]);

  return null;
}
