import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <div className="flex flex-col font-montserrat justify-center w-full h-full text-[#ffffff]">
      <div className="flex flex-col items-center w-[1046px] h-[1028px] absolute top-[104px] left-[194px] ">
        {/* Upper Box start */}
        <div className="flex-col w-[701px] h-[496px] justify-items-center gap-y-6 ">
          <div className="flex h-[24px] w-[77px]  ">
            <h5 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23A6F0] my-28 ">
              Welcome
            </h5>
          </div>
          <div className="flex justify-center w-[699px] h-[496px] py-40 gap-40 ">
            <h1 className="w-[542px] h-[160px] font-semibold text-[50px] leading-[80px] tracking-[0.2px] text-center mx-11">
              Selling on the internet like a pro
            </h1>
          </div>
          <div className="flex w-[536px] h-[60px] -mt-28">
            <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
          </div>
          <div className="flex justify-center w-[596px] h-[60px]  gap-[10px]  my-9">
            <Button className="w-[193px] h-[52px] bg-[#23A6F0] border-4 border-[#23a6f0] hover:bg-[#23a6f0] hover:border-4 hover:border-[#3f83aa] rounded-sm py-[15px] px-[40px] items-center">
              <Link
                href="/button"
                className="flex w-[113px] h-[22px] font-semibold text-[14px] leading-[22px] tracking-[0.2px] text-center"
              >
                {" "}
                Get Quote Now
              </Link>
            </Button>
            <Button className="w-[162px] h-[52px] bg-transparent hover:bg-transparent hover:hover:border-4 hover:border-[#3f83aa] border-[1px] border-[#23a6f0] rounded-sm py-[15px] px-[40px] text-[#23A6F0]">
              <Link
                href="/button"
                className="flex w-[82px] h-[22px] font-semibold text-[14px] leading-[22px] tracking-[0.2px] text-center"
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        {/* Upper box end*/}

        {/* Lower Box start*/}
        <div className="flex justify-between items-center w-[1046px] h-[292px]  my-32 ">
          <div className="flex flex-col">
            <Card className=" w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] bg-[#ffffff] shadow-[0px_13px_19px_0px_#00000012]">
              <div className="flex w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#FFDCD1]"></div>

              <CardHeader>
                <CardTitle>
                  <p className="w-[165px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]  -mx-5">
                    trainingCourses
                  </p>
                  <div className="w-[50px] h-[2px] bg-[#E74040] mt-4 -mx-4 my-3"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className=" w-[222px] h-[60px]">
                <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-nowrap text-[#737373] -mx-5">
                  The gradual accumulation <br />
                  of information about atomic <br />
                  and small-scale behaviour...
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card className=" w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] bg-[#ffffff] shadow-[0px_13px_19px_0px_#00000012]">
              <div className="flex w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#B9EAA8]"></div>

              <CardHeader>
                <CardTitle>
                  <p className="w-[165px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]  -mx-5">
                    2,769OnlineCourses
                  </p>
                  <div className="w-[50px] h-[2px] bg-[#E74040] mt-4 -mx-4 my-3"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="w-[222px] h-[60px]">
                <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-nowrap text-[#737373] -mx-5">
                  The gradual accumulation <br />
                  of information about atomic <br />
                  and small-scale behaviour...
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col ">
            <Card className=" w-[328px] h-[292px] py-[35px] px-[40px] gap-[20px] bg-[#23a6f0] shadow-[0px_13px_19px_0px_#00000012]">
              <div className="flex w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] bg-[#ffffff]"></div>

              <CardHeader>
                <CardTitle>
                  <p className="w-[165px] h-[24px] font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#ffffff] -mx-5">
                    trainingCourses
                  </p>
                  <div className="w-[50px] h-[2px] bg-[#ffffff] mt-4 -mx-4 my-3"></div>
                </CardTitle>
              </CardHeader>

              <CardContent className="w-[222px] h-[60px]">
                <p className=" font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-nowrap  text-[#ffffff] -mx-5">
                  The gradual accumulation <br />
                  of information about atomic <br />
                  and small-scale behaviour...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/*Lower box end*/}
      </div>
    </div>
  );
}
