"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useLoadingBar } from "../hooks/use-loading-bar"; 

type NextLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export type LoadingLinkProps = Omit<NextLinkProps, "onClick"> & {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function NavLink({ href, onClick, children, ...props }: LoadingLinkProps) {
  const { start } = useLoadingBar();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    const isExternal =
      typeof href === "string" &&
      (href.startsWith("http") || href.startsWith("mailto:"));

    if (isExternal) return;

    start(); // ✅ just start the bar
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
