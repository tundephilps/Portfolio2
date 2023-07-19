import Link from "next/link";
import { Nativeprojects } from "@/Data/NativeData";
import { AiFillGithub, AiFillEye } from "react-icons/ai";

function NativeProjects() {
  return (
    <>
      {Nativeprojects.map((project) => (
        <div key={project.id} className="bg-Blur p-4  rounded-lg">
          <div className="w-full  relative group">
            <img src={project.img} alt="" />
            <div className="absolute w-full h-full bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
              <Link href={project.github}>
                <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
              </Link>
              <Link href={project.link}>
                <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
              </Link>
            </div>
          </div>
          <div className="text-White mt-2 text-start">{project.name}</div>
          <div className="flex mt-2 flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-Blur rounded-full py-2 px-3 text-white text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default NativeProjects;
