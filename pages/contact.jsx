import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
export default function contact() {
  return (
    <>
      <Head>
        <title>Tunde | Contact</title>
      </Head>
      <Wrapper
        pageIndex={4}
        className="text-White gap-12 sm:py-10 flex flex-col justify-center items-center lg:flex-row pt-28  lg:pt-20 lg:h-[100vh]"
      >
        <div className="md:px-6 py-6 text-center">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            Contact
          </div>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-WhiteGray">
            If you&apos;re looking for a skilled frontend developer to help
            bring your Web and Mobile application ideas to life, feel free to
            contact me. Let&apos;s discuss how I can contribute to your team and
            deliver top-notch results.
          </p>
          <div>
            {contacts.map((contact) => (
              <div className="mt-6" key={contact.id}>
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-WhiteGray">{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-[30rem] px-6 text-center py-6 shadow-ShadowBlur">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
            Contact Form
          </div>
          <form>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="email"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Message"
              />
            </div>
            {/* <button
              type="submit"
              className="mt-10 px-8 py-4 shadow-ShadowBlur uppercase text-sm cursor-pointer hover:bg-yellow-300"
            >
              Send Message
            </button> */}
            <button className="btn mx-auto  shadow-ShadowBlur" type="button">
              <strong>SEND MESSAGE</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
