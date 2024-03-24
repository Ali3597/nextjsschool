'use client'

import React from "react";
import Link from "next/link";
import { signIn,signOut, useSession } from "next-auth/react";

const SessionsHeader = () => {
  const { status } = useSession();
  if (status === "loading"){
    return <p>Loading ...</p>
  }


  return (


   <>
         {status === "authenticated" && (
            <> 
            <li>
          <Link href="/profile" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Profil</Link>
        </li>
             <li>
            <button onClick={()=>{signOut()}} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Deconnexion</button>
            </li>
            
            </>
         )}
         {status !== "authenticated" && (
            <> 
            <li>
            <button onClick={()=>{signIn()}} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Connexion</button>
            </li>
            <li>
          <Link href="/signup" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inscription</Link>
        </li>
            
            </>
         )}
  
  </>
  );
};

export default SessionsHeader;