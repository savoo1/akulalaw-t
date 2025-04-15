import React from "react";

export default function Nav() {
  return (
    <div className="absolute left-0 right-0 top-0">
      <div className="pl-[5vw]">
        <div className="flex w-full gap-[80px]">
          <div className="py-[10px]">
            <img
              alt="logo"
              src="./imgs/logo.png"
              className="max-w-[210px]"
            ></img>
          </div>
          <div className="flex-1 flex-col">
            <div className="bg-white flex min-h-[50px] pr-[5vw] justify-between items-center">
              <div>dsa</div>
              <div>
                <a href="/" className="items-center flex gap-[20px]">
                  <span className="font-montaga font-bold text-[clamp(1.3rem,1.3vw,1.8rem)]">
                    Call Us Today!dsa
                  </span>
                  <span className="text-[1.5rem]">844-299-5003</span>
                </a>
              </div>
            </div>
            <div className="pr-[5vw] flex justify-end py-[20px]">dsa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
