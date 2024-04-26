import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import ReactProjects from "./ReactProjects";
import NextProjects from "./NextProjects";
import NativeProjects from "./NativeProjects";
import { motion } from "framer-motion";

const Tabs: React.FC = () => {
  const [toggle, setToggle] = useState<number>(1);
  const [activeButton, setActiveButton] = useState<number>(0);

  function updateToggle(id: number): void {
    setToggle(id);
  }
  return (
    <>
      <nav aria-label="Tabs">
        <ul className="flex border-b border-gray-100">
          <li className="flex-1">
            <button
              className="relative block p-4"
              onClick={() => updateToggle(1)}
            >
              <span
                className={
                  toggle === 1
                    ? "absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"
                    : "absolute inset-x-0 -bottom-px h-px w-full bg-gray-100"
                }
              ></span>

              <div className="flex items-center justify-center gap-4">
                <FaReact className="h-5 w-5 shrink-0 text-gray-500" />

                <span className="text-sm font-medium text-gray-300">
                  {" "}
                  React
                </span>
              </div>
            </button>
          </li>

          <li className="flex-1">
            <button
              className="relative block p-4"
              onClick={() => updateToggle(2)}
            >
              <span
                className={
                  toggle === 2
                    ? "absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"
                    : "absolute inset-x-0 -bottom-px h-px w-full bg-gray-100"
                }
              ></span>

              <div className="flex items-center justify-center gap-4">
                <SiNextdotjs className="h-5 w-5 shrink-0 text-gray-500" />

                <span className="text-sm font-medium text-gray-300"> Next</span>
              </div>
            </button>
          </li>

          <li className="flex-1">
            <button
              className="relative block p-4"
              onClick={() => updateToggle(3)}
            >
              <span
                className={
                  toggle === 3
                    ? "absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"
                    : "absolute inset-x-0 -bottom-px h-px w-full bg-gray-100"
                }
              ></span>
              <div className="flex items-center justify-center gap-4">
                <TbBrandReactNative className="h-5 w-5 shrink-0 text-gray-500" />
                <span className="text-sm font-medium text-gray-300 ">
                  Mobile
                </span>
              </div>
            </button>
          </li>
        </ul>
      </nav>

      <div className={toggle === 1 ? "flex text-white" : "hidden"}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 20,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            <ReactProjects />
          </div>
        </motion.div>
      </div>

      <div className={toggle === 2 ? "flex text-white" : "hidden"}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
            <NextProjects />
          </div>
        </motion.div>
      </div>
      <div className={toggle === 3 ? "flex text-white" : "hidden"}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 md:px-8">
          <NativeProjects />
        </div>
      </div>
    </>
  );
};

export default Tabs;
