import React from "react";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import selfie13 from "../public/selfie13.jpg";

import selfie8 from "../public/selfie8.jpg";
import selfie12 from "../public/selfie12.jpg";
import selfie0 from "../public/selfie0.jpg";
import selfie10 from "../public/selfie10.jpg";

import selfie7 from "../public/selfie7.jpg";

import selfie6 from "../public/selfie6.jpg";

import selfie5 from "../public/selfie5.jpg";

import selfie4 from "../public/selfie4.jpg";

import selfie3 from "../public/selfie3.jpg";

import selfie1 from "../public/selfie1.jpg";

import selfie2 from "../public/selfie2.jpg";
import selfie9 from "../public/selfie9.jpg";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Tunde | Contact</title>
      </Head>
      <Wrapper
        pageIndex={5}
        className="text-White gap-12 sm:py-10 flex flex-col justify-center items-center lg:flex-row pt-28  lg:pt-20 lg:h-full"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-7">
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={selfie13}
                alt=""
                height={200}
                width={300}
              />
            </div>
            <div>
              <Image
                className=" max-w-full rounded-lg"
                src={selfie12}
                alt=""
                width={300}
              />
            </div>
            <div>
              {" "}
              <Image
                className=" max-w-full rounded-lg"
                src={selfie9}
                alt=""
                width={300}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className=" max-w-full rounded-lg"
                src={selfie10}
                alt=""
                width={300}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={selfie0}
                alt=""
              />
            </div>
            <div>
              <Image
                className=" max-w-full rounded-lg"
                src={selfie7}
                alt=""
                width={300}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className=" max-w-full rounded-lg"
                src={selfie6}
                alt=""
                width={300}
              />
            </div>
            <div>
              <Image
                className=" max-w-full rounded-lg"
                src={selfie5}
                alt=""
                width={300}
              />
            </div>
            <div>
              <Image
                className=" max-w-full rounded-lg"
                src={selfie4}
                alt=""
                width={300}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={selfie2}
                alt=""
                width={300}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={selfie1}
                alt=""
                width={300}
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={selfie3}
                alt=""
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Gallery;
