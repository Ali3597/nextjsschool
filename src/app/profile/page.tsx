
"use client";
import {  useSession } from "next-auth/react";

const Page =  () => {
    const { data: session } = useSession();
  return (
    <div >
      <h1>Mon nom : {session?.user?.name }</h1>
      <h1>Mon email : {session?.user?.email}</h1>
   
    </div>
  );
};

export default Page;