"use client";

import { useAuthStore } from "@/store/Auth";
import { redirect } from "next/navigation"; // ✅ Correct way to redirect in App Router
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { session } = useAuthStore();

  if (session) {
    redirect("/"); // ✅ Use `redirect()` instead of `useRouter()`
  }

  return (
    <div className="auth-layout">
      {children} {/* ✅ Ensure children are always rendered */}
    </div>
  );
};

export default Layout;
