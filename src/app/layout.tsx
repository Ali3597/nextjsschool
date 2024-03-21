import "./globals.css";

import Header from "@/components/Header";
import AuthProvider from "@/providers/AuthProvider";


export default function RootLayout({ children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body >
      <AuthProvider> 
        <Header />
        <main>
        {children}
        </main>
        </AuthProvider>
      </body>
    </html>
  );
}
