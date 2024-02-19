"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import classnames from "classnames";
import Image from 'next/image';

const links = [
  { name: "Data Blog", href: "/dashboard/blog" },
  { name: "Data Galleri", href: "/dashboard/galeri" },
  { name: "Data Guru", href: "/dashboard/guru" },
  { name: "Kontak Masuk", href: "/dashboard/kontak" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.name === 'Admin';

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session || !isAdmin) {
    return <div>Unauthorized Access</div>;
  }

  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col w-1/4 text-secondary h-screen bg-black py-5 px-8 sticky top-0">
        <div className="text-2xl text-center font-semibold h-14 w-full border-secondary border-b-2 mb-5">
          ADMIN TBSM
        </div>
        <div className="flex flex-col items-center border-secondary border-b-2 w-full mb-5 pb-5">
          <Image
            className="rounded-full w-36 h-36 object-cover border-secondary m-5"
            src={"/img/profile.jpg"}
            height={150}
            width={150}
            alt="User Profile"
          />
          <h1 className="text-xl font-normal text-center">NAMA</h1>
        </div>
        <div className="flex flex-col w-full items-center">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <a
                className={classnames("text-lg w-full font-semibold text-gray-600 transition duration-100 hover:text-primary text-center p-2 rounded", {
                  "bg-primary text-secondary font-semibold": pathName === link.href
                })}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button onClick={() => signOut()}>LogOut</Button>
        </div>
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
}
