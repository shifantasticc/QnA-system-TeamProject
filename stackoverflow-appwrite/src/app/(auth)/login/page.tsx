"use client";

import { useAuthStore } from "@/store/Auth";
import React from "react";

export default function Login() {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    const loginResponse = await login(email.toString(), password.toString());
    if (loginResponse.error) {
      setError(loginResponse.error!.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Login to Your Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" name="email" placeholder="Email" className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password" className="border p-2 w-full" />
        <button type="submit" disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
