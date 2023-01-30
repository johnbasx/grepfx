import { Container } from "@components/Container";
import Link from "next/link";
import React from "react";
import { TbCheck } from "react-icons/tb";
import { createID } from "@contents/links";

const BecomePartner = () => {
  return (
    <Container className='mt-8 mb-20'>
      <div className='grid items-center max-w-5xl grid-cols-1 py-8 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24'>
        <div>
          <h2 className='mb-3 text-3xl font-extrabold leading-tight tracking-tight text-center text-white sm:text-left md:text-4xl'>
            Become a Partner
          </h2>
          <p className='mb-6 text-lg text-center text-gray-300 sm:text-left md:text-LG'>
            Let&apos;s put our heads together to build a successful partnership
            to benefit both your customers and your business.
          </p>
          <Link href='#'>
            <span className='px-4 py-2.5 mx-auto text-center flex justify-center items-center sm:mx-0 max-w-xs w-full sm:w-auto font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 duration-200'>
              Become a Partner
            </span>
          </Link>
        </div>
        <div className='flex flex-col flex-grow space-y-5'>
          {partnerBenefits.map((data, index) => (
            <div
              className='inline-flex items-center'
              key={"partner-benefits-" + data.id + index}
            >
              <TbCheck className='flex-none w-5 h-5 mt-1 mr-2 text-emerald-400' />
              <p className='text-gray-300'>{data.label}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export const partnerBenefits = [
  {
    id: createID(),
    label: "Insider Training & Information",
  },
  {
    id: createID(),
    label: "Foreign Trips",
  },
  {
    id: createID(),
    label: "More than 1.5x returns",
  },
  {
    id: createID(),
    label: "Data Tracking and Analytics",
  },
  {
    id: createID(),
    label: "99.99% Guaranteed profits",
  },
  {
    id: createID(),
    label: "24/7 All time Support",
  },
  {
    id: createID(),
    label: "Dedicated License (Foundation 5L and above)",
  },
  {
    id: createID(),
    label: "License Validations",
  },
];
export default BecomePartner;
