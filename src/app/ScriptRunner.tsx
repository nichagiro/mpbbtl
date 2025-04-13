"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptRunner() {
  const pathname = usePathname();

  useEffect(() => {
    const existing = document.querySelector('script[src="/utils/ogency.js"]');
    if (existing) {
      existing.remove();
    }

    const script = document.createElement("script");
    script.src = "/utils/ogency.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname]);

  return null;
}
