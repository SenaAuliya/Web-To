"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

// Define the sidebar links
const links = [
  { name: "Data Blog", href: "/dashboard/blog" },
  { name: "Data Galleri", href: "/dashboard/galeri" },
  { name: "Data Guru", href: "/dashboard/guru" },
  { name: "Kontak Masuk", href: "/dashboard/kontak" },
];

// DashboardLayout component with a sticky sidebar
export default function DashboardLayout({
  children,
  blog,
  galeri,
  guru,
  kontak,
}: {
  children: React.ReactNode;
  blog?: React.ReactNode;
  galeri?: React.ReactNode;
  guru?: React.ReactNode;
  kontak?: React.ReactNode;
}) {
  const pathName = usePathname();
  const { data: session, status } = useSession();

  // Check if the user is authenticated and has the role of "admin"
  const isAdmin = session?.user?.role === 'admin';

  // Redirect to the login page if the user is not authenticated or is not an admin
  if (status === 'loading') {
    // Loading state, you can show a loading indicator here if needed
    return <div>Loading...</div>;
  }

  if (!session || !isAdmin) {
    // Redirect to the login page or show an unauthorized message
    return <div>Unauthorized Access</div>;
  }

  return (
    <div className="flex flex-row h-full">
      {/* Sidebar */}
      <div className="flex flex-col w-1/4 text-secondary h-screen bg-black py-5 px-8 sticky top-0">
        {/* Sidebar Header */}
        <div className="text-2xl text-center font-semibold h-14 w-full border-secondary border-b-2 mb-5">
          ADMIN TBSM
        </div>
        {/* User Profile Section */}
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
            <Link
              key={idx}
              href={link.href}
              className={`${
                pathName === link.href
                  ? "text-lg w-full bg-primary font-semibold text-secondary text-center"
                  : "text-lg w-full font-semibold text-gray-600 transition duration-100 hover:text-primary text-center  "
              } mb-3 p-2 rounded`}
            >
              {link.name}
            </Link>
          ))}
        </div>
            <Button onClick={() => signOut()}>LogOut</Button>
      </div>
      <div className="flex-grow">
        {children}
        {pathName === "/dashboard/blog" && blog}
        {pathName === "/dashboard/galeri" && galeri}
        {pathName === "/dashboard/guru" && guru}
        {pathName === "/dashboard/kontak" && kontak}
      </div>
    </div>
  );
}