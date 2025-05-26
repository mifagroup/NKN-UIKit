"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 0);

    return () => clearTimeout(timer);
  }, [router]);

  return <div className="flex h-screen items-center justify-center"></div>;
}
