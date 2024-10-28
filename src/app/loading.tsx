import { GiDelicatePerfume } from "react-icons/gi";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#252B42] text-gray-200">
      <div className="text-center ">
        {/* Loading Icon */}
        <div className="animate-spin-slow">
          <GiDelicatePerfume size={80} className="text-gray-200" />
        </div>
        
        {/* Loading Text */}
        <h1 className="mt-6 text-2xl font-semibold">Loading your experience...</h1>
        <p className="text-gray-400 mt-2">Hang tight, we’re setting things up for you!</p>
      </div>
    </div>
  );
}
