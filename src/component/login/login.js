"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
console.log(session)
  return (
    <nav>
      <div className="flex flex-col">
        {!session ? (
          <button
            onClick={() => signIn("google", { callbackUrl: "/products" })}
            className="px-4 py-2 text-white bg-blue-600 rounded-md cursor-pointer"
          >
            Login
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <p>{session.user.name}</p>
            <img
              src={session.user.image}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-white bg-red-600 rounded-md cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
