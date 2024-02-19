'use client';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "../../../public/img/logo-to (2).jpeg";
import { Navbar } from 'flowbite-react';
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Tentang",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Galeri",
    href: "/galeri",
  },
  {
    name: "Kontak",
    href: "/contact",
  },
];

function Component() {
  const pathName = usePathname();

  return (
    <Navbar fluid rounded className='px-3'>
      <Navbar.Brand as={Link} href="/">
        <Image src={Logo} width={60} height={60} className="mr-3" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          TO
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Component;
