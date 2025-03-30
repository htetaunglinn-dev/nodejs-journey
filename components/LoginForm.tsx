import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="m-auto flex flex-col gap-3  rounded-md p-6 bg-white shadow-2xs">
      <h1>Login</h1>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button
          type="submit"
          className="bg-orange-300 text-white px-4 py-1 rounded-md cursor-pointer"
        >
          Login
        </button>

        <Link href="/register">
          Don&apos;t have an account?
          <span className="underline">Register</span>
        </Link>
      </form>
    </div>
  );
}
