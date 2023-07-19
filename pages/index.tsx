import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { useState, useEffect } from "react";

import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

const Home: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        if (newCounter < 100) {
          return newCounter;
        } else {
          clearInterval(count);
          setCounter(100);
          reveal();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Wrapper
        pageIndex={1}
        className="max-w-2xl text-center flex flex-col justify-center relative"
      >
        <div className="h-full w-full  flex items-center justify-center absolute top-0">
          <div className="follow absolute  h-[2px] w-full left-0 z-10"></div>
          <div
            className="hide top-[45%] absolute left-0 bg-[#fff] h-[2px] w-0 transition ease-out duration-300"
            id="progress-bar"
            style={{ width: counter + "%" }}
          ></div>
          <div
            id="count"
            className="hide absolute lg:text-9xl text-8xl  text-white transform -translate-y-6 font-extrabold"
          >
            {counter}%
          </div>
        </div>
        <div className="content h-full w-0 absolute left-0 top-0 mx-auto z-10 flex items-center justify-center flex-col overflow-hidden text-white  ">
          <div className=" title-lines flex sm:justify-between items-center gap-4 sm:gap-0">
            <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold">
              Hi I&apos;m
            </div>
            <div className="sm:h-2 sm:w-[30rem] xs:w-[19rem] rounded-sm bg-Orange"></div>
          </div>
          <div className="text-6xl text-White font-medium">
            Tunde Akinola Philps
          </div>
          <div className="uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8">
            A Frontend <br />
            developer
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
