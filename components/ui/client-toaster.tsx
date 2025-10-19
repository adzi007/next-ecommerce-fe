"use client";

import { Toaster } from "@/components/ui/sonner";

export function ClientToaster() {
  return (
    <Toaster
      richColors
      position="top-center"
      toastOptions={{
        style: {
          background: "white",
          color: "black",
        },
      }}
    />
  );
}
