import Image from "next/image";

import cryptoCoins from "@/../public/images/crypto-coins.png";
import gold from "@/../public/images/gold.png";
import poultry from "@/../public/images/poultry.png";
import realEstate from "@/../public/images/real-estate.png";
import trading from "@/../public/images/trading.png";

import { Container } from "@components/Container";
import { ButtonLink } from "@components/Button";
import { FaPlay } from "react-icons/fa";
import { createID } from "@contents/links";

export function Hero() {
  return (
    <Container className='pt-20 pb-16 text-center lg:pt-32'>
      <h1 className='max-w-4xl mx-auto text-5xl font-bold tracking-tighter font-display text-off-white sm:text-7xl'>
        Investing{" "}
        <span className='relative text-purple-600 whitespace-nowrap'>
          <CurvyLine />
          <span className='relative'>made simple</span>
        </span>{" "}
        for individuals & businesses.
      </h1>
      <p className='max-w-2xl mx-auto mt-6 text-lg tracking-tight text-slate-300'>
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don’t get audited.
      </p>
      <div className='flex justify-center mt-10 space-x-6'>
        <ButtonLink
          className='text-black duration-200 bg-off-white hover:bg-off-white/70'
          href='/register'
        >
          Get membership
        </ButtonLink>
        <ButtonLink
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          variant='outline'
          className='text-off-white hover:text-off-white/75'
        >
          <FaPlay
            aria-hidden='true'
            className='flex-none w-3 h-3 fill-off-white group-active:fill-current'
          />

          <span className='ml-3 text-off-white'>Watch video</span>
        </ButtonLink>
      </div>
      <div className='mt-28 lg:mt-32'>
        <p className='text-xl font-medium text-off-white'>
          Where we Invest our money
        </p>
        <ul className='flex items-center justify-center mt-8 space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12'>
          <li>
            <ul className='flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12'>
              {investments.map((data, index) => (
                <li className='flex' key={"investment-" + data.id + index}>
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={100}
                    height={100}
                    className='object-contain w-auto h-20 brightness-110 mix-blend-luminosity'
                    unoptimized
                  />
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export const investments = [
  {
    id: createID(),
    name: "Crypto and Blockchain",
    image: cryptoCoins,
  },
  {
    id: createID(),
    name: "Poultry",
    image: poultry,
  },
  {
    id: createID(),
    name: "Gold",
    image: gold,
  },
  {
    id: createID(),
    name: "Stocks & Trading",
    image: trading,
  },
  {
    id: createID(),
    name: "React Estate",
    image: realEstate,
  },
];
export const CurvyLine = () => {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 418 42'
      className='absolute top-2/3 left-0 h-[0.58em] w-full fill-emerald-400/70'
      preserveAspectRatio='none'
    >
      <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
    </svg>
  );
};
