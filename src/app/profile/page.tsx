
"use client";
import {  useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page =  () => {
    const { data: session,status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status !== "authenticated" && status !=="loading") {
          router.push("/");
        }
      }, [status, router]);


  return (
    <div >
      <h1>Mon nom : {session?.user?.name }</h1>
      <h1>Mon email : {session?.user?.email}</h1>
    </div>
  );
};

export default Page;