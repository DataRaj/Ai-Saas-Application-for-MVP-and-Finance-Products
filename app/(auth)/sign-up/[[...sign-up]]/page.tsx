import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
    
    return(
    <div className="lg:grid-cols-2 min-h-screen grid grid-cols-1">
      <div className=" h-full flex flex-col items-center justify-center px-4">
        <div className=" text-center space-y-4 pt-16">
            <h1 className=" font-bold text-3xl text-[#2E2A47]">
                Welcome back!
            </h1>
            <p className="text-base text-gray-500 pb-4">
                Sign-up to the personal finances 
            </p>
        </div>
        <SignUp path="/sign-up" />
      </div>
      <div className="bg-cyan-300 flex justify-center items-center">
        <div className="">
            <Image className="" src="/logo.svg" alt="logo" height="260" width="260"/>
        </div>
      </div>
    </div>
)

}