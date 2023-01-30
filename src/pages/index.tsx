import { Container } from "@components/Container";
import BecomePartner from "@components/home/BecomePartner";
import { Hero } from "@components/home/Hero";
import Stats from "@components/home/Stats";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col flex-1 h-full'>
      <Container>
        <Hero />
        <BecomePartner />
      </Container>
    </div>
  );
}
