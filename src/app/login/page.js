"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <button
        onClick={handleLogin}
        className="px-6 py-3 text-white bg-blue-600 rounded-md cursor-pointer"
      >
        Login with Google
      </button>
    </div>
  );
}
