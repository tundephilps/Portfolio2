import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
import Rat from "@/components/Rat";
export default function about() {
  return (
    <>
      <Head>
        <title>TundePhilps | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image
            src={"/suit.jpg"}
            width={500}
            height={700}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
              FrontEnd Software Engineer (Web and Mobile)
            </div>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              {" "}
              I am a passionate frontend developer with a creative eye for
              design and a strong focus on delivering elegant and intuitive
              interfaces. Excited to collaborate on new projects!
            </p>
            <div className="flex gap-8 mt-8">
              <div className="container">
                <a className="down" download>
                  <svg
                    viewBox="0 0 256 256"
                    height="32"
                    width="38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">
                  <p>Download CV👋</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Skills skills={skills} />
        <Rat />

        <h1 className="neon mt-4">Everyday am Shuffling......</h1>
      </Wrapper>
    </>
  );
}
