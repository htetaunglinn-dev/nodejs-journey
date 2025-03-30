"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="m-auto flex flex-col gap-3  rounded-md p-6 bg-white shadow-2xs">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-300 text-white px-4 py-1 rounded-md  cursor-pointer"
        >
          Register
        </button>

        <Link href="/">
          Already have an account?
          <span className="underline">Login</span>
        </Link>
      </form>
    </div>
  );
}
