import { Container } from "@components/Container";
import Image from "next/image";
import React from "react";
import DisplayCard from "./DisplayCard";
import FooterLinks from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='bg-baltic-sea'>
      <Container>
        <DisplayCard />

        <div className='lg:grid lg:grid-cols-6'>
          <div className='relative block h-32 lg:col-span-2 lg:h-full'>
            <Image
              src='/logo/grepfx-tp.png'
              unoptimized
              alt='Main logo'
              height={100}
              width={100}
              className='absolute inset-0 flex items-center justify-center object-cover w-full h-full grid-cols-1 mx-auto'
            />
          </div>

          <div className='px-4 py-16 sm:px-6 lg:col-span-4 lg:px-8'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
              <SocialLinks />
              <FooterLinks />
            </div>

            <Copyright />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
