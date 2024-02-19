"use client"
import NavbarComponent from "./components/NavbarComponents";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponents from "./components/FooterComponents";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
const disableNavbar = ['/login', 'register', '/dashboard', '/dashboard/blog', '/dashboard/galeri', '/dashboard/guru', '/dashboard/kontak']
const disableFooter = ['/login', 'register', '/dashboard', '/dashboard/blog', '/dashboard/galeri', '/dashboard/guru', '/dashboard/kontak']


export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="id">
      <head>
        <title>Web Jurusan To</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />      
        </head>
      <body className={inter.className}>
          <SessionProvider>
          {!disableNavbar.includes(pathname)&&<NavbarComponent />}
          {children}
          {!disableFooter.includes(pathname)&&<FooterComponents/>}
          </SessionProvider>
      </body>
    </html>
  );
}
