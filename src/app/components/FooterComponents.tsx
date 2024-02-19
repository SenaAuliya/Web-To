import Logo from '../../../public/img/logo-to__2_-removebg-preview.png';
import Image from 'next/image';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';

export default function FooterComponents() {
  return (
    <div className='flex flex-col md:flex-row bg-background p-4 justify-between'>

      {/* Logo and Title */}
      <div className='flex flex-row items-center mb-4 md:mb-0'>
        <Image src={Logo} width={60} height={60} alt='logo' />
        <h5 className='text-xl md:text-2xl font-semibold ml-2'>TO</h5>
      </div>

      {/* Menu Links */}
      <div className='flex flex-col gap-2 mb-4 md:mb-0'>
        <h1 className='text-xl md:text-2xl font-semibold'>Menu</h1>
        <Link href={'/'} className='text-md hover:text-primary md:text-lg'>Home</Link>
        <Link href={'/about'} className='text-md hover:text-primary md:text-lg'>About</Link>
        <Link href={'/blog'} className='text-md hover:text-primary md:text-lg'>Blog</Link>
        <Link href={'/galeri'} className='text-md hover:text-primary md:text-lg'>Gallery</Link>
        <Link href={'/contact'} className='text-md hover:text-primary md:text-lg'>Contact</Link>
      </div>

      {/* Contact Information */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl md:text-2xl font-semibold'>Contact Us</h1>
        <p className='text-md md:text-lg'>Alamat: JL. KH. Achmad Fauzan No. 17 Bangsri Jepara</p>
        <p className='text-md md:text-lg'>Email: <Link href="mailto:smkn1bangsri@yahoo.co.id">smkn1bangsri@yahoo.co.id</Link></p>
        <p className='text-md md:text-lg'>Phone: (291) 772321</p>
      </div>
    </div>
  );
}
