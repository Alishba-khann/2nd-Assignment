"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VscError } from "react-icons/vsc";

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-montserrat -mt-20 bg-[#252B42] text-gray-200">
      {/* Error Icon */}
      <VscError size={80} className="text-red-700 mb-4" />

      {/* Error Message */}
      <p className="text-gray-400 mb-6 text-3xl font-medium text-center">
      It’s not you;it’s us. We’ll get this sorted soon!<br /> Meanwhile, feel free to refresh or head back home.
      </p>

      {/*Home Button */}
      <Link href="/">
        <Button className="px-6 py-3 rounded bg-transparent border-2 border-dotted hover:border-4 hover:border-red-600 text-white text-lg font-medium">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
}
