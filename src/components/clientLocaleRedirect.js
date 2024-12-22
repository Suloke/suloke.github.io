"use client";

import { useEffect } from "react";
import getLocale from "@/utils/getLocale";
import { redirect } from "next/navigation";

export default function ClientLocaleRedirect() {
  useEffect(() => {
    const locale = getLocale();
    redirect(`/${locale}`);
  }, []);

  return null;
}
