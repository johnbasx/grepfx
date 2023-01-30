import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href='#'>
      <span className='sr-only'>Home</span>
      {/* <Logo className='w-auto h-10' /> */}
      <Image
        src='/logo/grepfx-logo.png'
        unoptimized
        alt='GrepFx Logo'
        height={100}
        width={100}
        className='hidden object-contain w-auto h-10 lg:block'
      />
      <Image
        src='/logo/grepfx-icon.png'
        unoptimized
        alt='GrepFx Logo'
        height={100}
        width={100}
        className='block object-contain w-auto h-10 lg:hidden'
      />
    </Link>
  );
};

export default Logo;
