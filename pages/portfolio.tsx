import Head from "next/head";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/Data/Data";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import Services from "@/components/Services";
import { countUpItems } from "@/Data/Data";
import MyCountUp from "@/components/CountUp";
import { useInView } from "react-intersection-observer";
import ReactProjects from "@/components/ReactProjects";
import Tabs from "@/components/Tabs";
export default function Portfolio() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <Head>
        <title>TundePhilps | Portfolio</title>
      </Head>
      <Wrapper pageIndex={3}>
        <div className="flex flex-col pt-40 items-center text-center">
          <div className="uppercase font-semibold text-sm text-WhiteGray">
            - Portfolio
          </div>
          <div className="font-semibold text-3xl mt-8 text-White uppercase">
            My Masterpiece Collections
          </div>
          <p className="text-WhiteGray text-sm mt-8 leading-7 max-w-3xl">
            I specialize in developing custom web and mobile applications that
            cater to diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
          <Tabs />
        </div>
        {/* -----Services ----- */}
        <Services />
        {/* -------Count Up */}
        <div className="flex justify-center gap-12 flex-wrap" ref={ref}>
          {countUpItems.map((item) => (
            <div key={item.id} className="text-center">
              <div className="text-Orange text-3xl">
                {inView && (
                  <MyCountUp start={0} end={item.number} duration={3} />
                )}
                +
              </div>
              <div className="text-WhiteGray mt-2 text-sm">{item.text}</div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}
