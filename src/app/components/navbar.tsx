import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex font-montserrat justify-center items-start w-full bg-[#252B42]">
      <div className="flex justify-start w-[1322px] h-[91px] text-[#ffffff] ">
        <div className="relative">
          {/* Brand Name */}
          <div className="w-[187px] h-[58px] top-[17px] left-[136px] absolute flex items-center gap-x-8">
            <h3 className="text-2xl font-bold">BrandName</h3>
          </div>

          {/* Navigation Links */}
          <div className="flex w-[815px] h-[58px] absolute top-[16px] left-[364px]">
            <div className="flex items-center absolute top-[17px] w-[275px] h-[24px] gap-[21px] ">
              <ul className="flex list-none gap-x-[21px] items-center w-[43px] h-[24px] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">Product</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Login and JOIN US Button */}
            <div className="flex items-center w-[189px] h-[52px] absolute top-[3px] left-[626px] gap-[45px]">
              <a
                href="login"
                className="flex w-[60px] h-[22px] font-bold text-[14px] leading-[22px] tracking-[0.2px] text-right"
              >
                Login
              </a>
              <Button className="w-[110px] h-[52px] rounded-[5px] py-[15px] px-[25px] top-16 bg-[#23A6F0] hover:bg-[#23a5f0de] text-white">
                <Link
                  href="/"
                  className="flex w-[60px] h-[22px] font-bold text-[14px] leading-[22px] tracking-[0.2px]"
                >
                  {" "}
                  JOIN US
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
