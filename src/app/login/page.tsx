// pages/login.tsx
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center font-sans min-h-screen bg-gradient-to-br from-[#1e2233] to-[#23a6f0]">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#1e2233]">Login</h2>
        
        {/* Form Fields */}
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          {/* Forgot Password and Sign Up Links */}
          <div className="flex justify-between items-center mt-4">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <Link href="/signup" className="text-sm text-blue-600 hover:underline">
              Don’t have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
