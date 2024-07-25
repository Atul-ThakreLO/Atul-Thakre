import React, { useState, useEffect, useRef } from "react";
import ProgressData from "./ProgressData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ProgressCard(props) {
  gsap.registerPlugin(ScrollTrigger);
  // useGSAP(() => {
  //   gsap.from(".progress-box-l", {
  //     x: 100,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".progress-box-l",
  //       start: "top 60%",
  //       end: "top 80%",
  //       toggleActions: "play none reverse none",
  //     },
  //   });
  //   gsap.from(".progress-box-r", {
  //     x: -100,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".progress-box-r",
  //       start: "top 60%",
  //       end: "top 80%",
  //       scrub: true,
  //       toggleActions: "play none reverse none",
  //     },
  //   });
  // });
  const boxesRef = useRef(null);
  // const progressFillRef = useRef

  useEffect(() => {
    const boxes = boxesRef.current.children;

    gsap.utils.toArray(boxes).forEach((box, index) => {
      if (index % 2 === 0) {
        gsap.from(box, {
          opacity: 0,
          x: -100,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 60%",
            end: "top 70%",
            toggleActions: "play none reverse none",
          },
        });
      } else {
        gsap.from(box, {
          opacity: 0,
          x: 100,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 60%",
            end: "top 70%",
            toggleActions: "play none reverse none",
          },
        });
      }
    });
  }, []);

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xlg:grid-cols-3 gap-4"
        ref={boxesRef}
      >
        {ProgressData.map((data, index) => {
          return (
            <div
            key={index}
              className={`rounded-md border-2 mb-4 ${
                index % 2 === 0 ? "progress-box-r" : "progress-box-l"
              }`}
            >
              <div className="px-4 py-3 text-3xl border-b-2">
                <h1>{data.skill}</h1>
              </div>
              <div className="px-8 py-3 border-b-2">
                <div className="text-xl mb-2 flex justify-between">
                  <p className="text-xl">Pogress:</p>{" "}
                  <p className="text-[#ca2655]">{data.progress}</p>
                </div>
                <div className="mb-2">
                  <div className="w-full h-4 rounded-full bg-zinc-300 overflow-hidden">
                    <div
                      className="bg-[#71967d] h-full"
                      style={{ width: `${data.progress}` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex justify-between">
                <p className="w-1/2 md:w-1/2 lg:w-auto">Give Endorsement To My Skills</p>
                <a
                  href="https://www.linkedin.com/in/atul-thakre-logers/"
                  target="_blank"
                  className="mr-0 md:mr-1 lg:mr-8 hover:text-[#ca2655] underline"
                >
                  LinkedIn Skills
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="25"
                    fill="currentColor"
                    className="inline-block mx-4 md:mx-1 lg:mx-4 mb-1"
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressCard;
