import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";
import React, { useRef, useState, useEffect } from "react";

gsap.registerPlugin(SlowMo);

function Landing(props) {
  const [scale, setScale] = useState(1);
  const cardRef = useRef(null);
  const ulHeightRef = useRef(null);
  const liHeightRef = useRef(null);
  const skills = ["Front-End", "Back-End", "Full-Stack"];
  const skillLength = skills.length;

  useEffect(() => {
    props.onHover(scale);
  }, [scale, props]);

  useGSAP(() => {
    const timeLanding = gsap.timeline();

    timeLanding.from(".text-anime", {
      y: 200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      delay: 2.2,
    });

    timeLanding.from(cardRef.current, {
      width: 0,
      // y: -500,
      duration: 1.5,
      ease: "elastic.out(2,0.3)",
      delay: 0.5,
    });
    timeLanding.from(cardRef.current, {
      rotateX: 720,
      rotate: 360,
      duration: 0.5,
    });
    timeLanding.from(".skill-slide", {
      width: 0,
      padding: 0,
    });

    const ulHeight = ulHeightRef.current.offsetHeight;
    const liHeight = liHeightRef.current.offsetHeight;
    const actualHeight = -(ulHeight - liHeight);

    // let durationCard = skillLength + 2;
    // let durationSlide = durationCard / skillLength;
    // let delaySlide = durationSlide + ((skillLength / 100) * skillLength / 10);

    timeLanding.to(".skills ul", {
      y: actualHeight,
      duration: 6,
      repeat: -1,
      ease: `steps(${skillLength - 1})`,
    });
    gsap.from(".skills ul li", {
      y: -50,
      opacity: 0,
      duration: 1.66,
      repeat: -1,
      ease: "elastic.out(1,0.3)",
      delay: 2.4,
    });
  });

  /////////////////////////////////////////// My scroll ////////////////////////////////////
  // const scrollContainer = useRef(null);
  // const ele = useRef(null);
  // gsap.to(ele.current, {
  //   transform: "scale(1.1)",
  //   scrollTrigger: {
  //     trigger: ele.current,
  //     scrub: true,
  //     markers: true,
  //     start: "top 25%",
  //     end: "top -70%",
  //   },
  // });

  return (
    <div className="pt-52 w-[93%] flex justify-center items-center mx-auto scroll-container">
      <div
        // ref={ele}
        className="text-container w-max"
        onMouseOver={() => {
          setScale(3);
          console.log("Entered", scale);
        }}
        onMouseLeave={() => {
          setScale(1);
          console.log("leaved", scale);
        }}
      >
        <div className="container text-center w-[100%]">
          <div className="name text-anime">
            <span className="text-[#71967d] text-6xl sm:text-8xl md:text-9xl font-medium mr-4">
              Atul's
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl font-[350]">Portfolio</span>
          </div>
          <div className="flex items-center justify-center mt-4 mb-20 text-anime w-[100%] font-light">
            <div className="text-5xl sm:text-7xl md:text-8xl">By</div>
            <div
              className="img h-12 w-20 sm:h-16 sm:w-28 md:h-20 md:w-32 mt-2 mx-6 rounded-md overflow-hidden whitespace-nowrap p-0 bg-[#71967d] px-1"
              ref={cardRef}
            >
              <img
                src="../assets/lg.png"
                alt="img"
                className="h-full object-cover"
              />
            </div>
            <div className=" text-5xl sm:text-7xl md:text-8xl">Logers</div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex gap-2 mt-20 h-14 sm:h-20 text-4xl sm:text-6xl md:text-7xl overflow-hidden skills text-anime">
            <span className="font-[350]">Proficient In</span>
            <span className="overflow-hidden border-4 border-[#71967d] px-4 skill-slide rounded-md">
              <ul ref={ulHeightRef}>
                {skills.map((skill, index) => {
                  return (
                    <li
                      ref={liHeightRef}
                      key={index}
                      className="whitespace-nowrap text-[#ca2655] mb-4"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
