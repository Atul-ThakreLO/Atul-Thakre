import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function StartProject() {
  const container = useRef(null);
  useGSAP(() => {
    gsap.from(container.current, {
      y: 500,
      duration: 0.5,
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "top 50%",
      },
    });
    gsap.from(".ready-to-text", {
      y: -200,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".ready-to-text",
        scroller: "body",
        start: "top 80%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <div>
      <div
        ref={container}
        className="w-full bg-[#71967d]  rounded-t-3xl pt-48 pb-24"
      >
        <div className="w-full h-[90%] flex justify-center items-center bg">
          <div className="w-max h-max text-7xl sm:text-9xl text-center uppercase text-zinc-900 font-semibold">
            <div className="overflow-hidden mb-10">
              <p className="ready-to-text">Ready</p>
            </div>
            <div className="overflow-hidden mb-10">
              <p className="ready-to-text">To Start</p>
            </div>
            <div className="overflow-hidden mb-10">
              <p className="ready-to-text">Project ?</p>
            </div>
            <div className="w-max flex flex-col sm:flex-row mx-auto mt-28 text-xl button">
              <a
                href="https://www.linkedin.com/in/atul-thakre-logers/"
                target="_blank"
                className="p-4 border-2 w-full sm:w-auto mb-10 bg-[#ca2655] border-[#ca2655] rounded-full mr-5 hover:bg-transparent duration-300"
              >
                <span className="ml-10 sm:ml-4 inline-block">Connect me</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="35"
                  fill="currentColor"
                  className="inline-block mx-4 mb-1"
                  viewBox="0 0 16 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </a>
              <div className="flex justify-center w-full sm:block sm:w-auto">
                <div className="h-16 w-16  mt-1 flex justify-center items-center rounded-full scale-1 hover:scale-125 duration-300 border-2 border-[#ca2655]">
                  <a
                    href="mailto:atullr3019@gmail.com"
                    className="p-4 hover:scale-50 rounded-full border-2 border-[#ca2655] sm:w-auto duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="25"
                      fill="#ca2655"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartProject;
