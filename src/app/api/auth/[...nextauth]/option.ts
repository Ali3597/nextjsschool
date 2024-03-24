import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "MovieLearn",
        credentials: {
          email: { label: "E-mail", type: "text", placeholder: "Votre e-mail" },
          password: {
            label: "Mot de passe",
            type: "password",
            placeholder: "Votre mot de passe",
          },
        },
        async authorize(credentials, request) {
          const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
  
          const user = await response.json();
  
          return user || null;
        },
      }),
    ],
    pages:{
      signIn:"/signin"
    }
  }