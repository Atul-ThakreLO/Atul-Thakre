import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function ProjectDiscription({ toggleHeight, onDescription, data }) {
  // console.log(data[0].discription);
  // data.forEach(element => {
  //   console.log(element.discription)
  // });
  const Name = useRef(null);
  const discription = useRef(null);

  useGSAP(() => {
    gsap.from(Name.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });

    gsap.from(discription.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.7,
    });

    gsap.from(".techStack", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.7,
    });
  }, [data[0]]);

  return (
    <div className="w-full fixed bottom-0">
      <div
        className="w-[100%] sm:w-[95%] mx-auto duration-700 bg-zinc-300 rounded-t-[50px]"
        style={{ height: toggleHeight }}
      >
        <div className="fixed w-full">
          <div
            className="w-20 h-10 mx-auto mt-2 cursor-pointer"
            onClick={() => {
              onDescription("0vh");
            }}
          >
            <div className="w-full h-1 rounded-full bg-[#ca2655]"></div>
          </div>
        </div>
        <div className="w-[100%] mx-auto pt-8">
          <p className="w-max mx-auto text-3xl sm:text-4xl md:text-5xl pt-0 sm:pt-4">About Project</p>
          <div className="px-3 pr-0 md:px-20 lg:px-36 pt-4 text-xl relative h-full">
            <div
              ref={Name}
              className="w-max px-6 sm:px-8 md:px-10 py-1 sm:py-2 md:py-4 mb-1 sm:mb-3 rounded-md text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r to-[#ca2655] from-[#71967d]"
            >
              <h1 className="font-bold">{data[0] ? data[0].Name : ""}</h1>
            </div>
            <div className="scroll overflow-y-scroll h-[65vh] pb-32">
              <p ref={discription} className=" text-center mb-4 px-1 sm:px-10">
                {data[0] ? data[0].discription : ""}
              </p>
              <div className="mt-10">
                <p className="font-semibold ml-5 mb-6">
                  Tech Stack :
                </p>
                <ul className= "ml-10 sm:ml-20 list-disc list-inside mb-8">
                  {data[0]
                    ? data[0].tech.map((data, index) => (
                        <li
                          key={index}
                          className="techStack border-2 border-[#71967d] w-[75%] pl-3 sm:w-1/2 sm:pl-5 md:w-1/2 lg:w-1/3 mb-2 py-2 rounded-md"
                        >
                          {data}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <video className="w-[80%] sm:w-[70%] mx-auto mb-20" controls autoPlay src={data[0] ? data[0].vidSrc : ""}></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDiscription;
