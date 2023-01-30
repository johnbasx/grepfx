import { Container } from "@components/Container";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const DisplayCard = () => {
  return (
    <div className='flex flex-col items-center gap-4 p-6 shadow-lg rounded-2xl bg-gradient-to-r via-purple-500 to-purple-600 from-purple-700 sm:flex-row sm:justify-between'>
      <strong className='text-xl text-white sm:text-xl'>
        Make Your Next Career Move!
      </strong>

      <Link href='/' className='appearance-none'>
        <span className='inline-flex items-center px-8 py-3 text-sm font-semibold text-purple-700 bg-white border border-white rounded-full hover:bg-gray-100 hover:text-purple-700 focus:outline-none focus:ring active:bg-gray-100'>
          Let&apos;s Get Started
          <HiArrowNarrowRight className='ml-3' />
        </span>
      </Link>
    </div>
  );
};

export default DisplayCard;
