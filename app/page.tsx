import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* this app is mainly for the next auth and its application... lets see how can we run this smoothly with the sever. */}
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
