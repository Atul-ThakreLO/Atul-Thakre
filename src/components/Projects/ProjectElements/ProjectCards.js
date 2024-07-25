import React, { useEffect, useRef, useState } from "react";
import ProjectCardsData from "./ProjectCardData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ProjectCards(props) {
  const [innerText, setInnerText] = useState("");
  const [cursorStyles, setCursorStyles] = useState({
    backgroundColor: "white",
    width: "50px",
  });

  useEffect(() => {
    props.onHover(innerText, cursorStyles);
  }, [innerText, cursorStyles]);

  function handleOver() {
    setInnerText("Tap to View");
    setCursorStyles({
      backgroundColor: "green",
      width: "150px",
    });
  }
  function handleLeave() {
    setInnerText("");
    setCursorStyles({
      backgroundColor: "white",
      width: "50px",
    });
  }

  const container = useRef(null);
  const ele = useRef(null);
  const outerContainer = useRef(null);
  const imageCont = useRef([]);
  const length = ProjectCardsData.length;
  // const conatinerForLength = useRef(null);
  // useEffect(() => {
  //   console.log("inner width = ", container.current.offsetWidth);
  // }, [])

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(outerContainer.current, {
      backgroundColor: "black",
      color: "white",
      scrollTrigger: {
        trigger: outerContainer.current,
        scroller: "body",
        start: "top 25%",
        end: "top 0%",
        scrub: true,
      },
    });
    gsap.to(ele.current, {
      transform: `translateX(-${container.current.offsetWidth * length}px)`,
      scrollTrigger: {
        trigger: container.current,
        scroller: "body",
        start: "top 0%",
        end: "top -500%",
        pin: true,
        scrub: 0.5,
      },
    });
  });


  return (
    <div className="w-full py-8 bg-zinc-100" ref={outerContainer}>
      <div ref={container}>
        <div className="w-[90%] mx-auto pt-10 pl-10" ref={ele}>
          <div className="flex flex-nowrap gap-52">
            <div className="w-[100vw] hidden md:flex justify-center items-center">
              <p className="px-96 text-9xl flex gap-10">
                Projects{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="170"
                  height="175"
                  fill="currentColor"
                  className="bi bi-chevron-double-right"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </p>
            </div>
            {ProjectCardsData.map((card, index) => {
              return (
                <div key={index} className="featured-project relative w-full mt-40 sm:mt-20 lg:mt-20">
                  {/* <div className="text-sm uppercase mb-2 flex items-center">
                  <span className="w-3 h-3 flex-shrink-0 rounded-full bg-current mr-2"></span>
                  <span>{card.ProjectName}</span>
                </div> */}
                  <div
                    className=" w-[75vw] sm:w-[90vw] lg:w-[80vw] md:w-[67vw] md:h-[60vh] md:flex md:items-center md:justify-center cursor-pointer"
                    onClick={() => {
                      props.onDescription("90vh");
                      props.onFilterDiscri(card.ProjectName);
                    }}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}
                  >
                    <div className="flex flex-col lg:flex-row justify-between h-[50vh] sm:h-[70vh] md:h-[60vh] lg:w-[100%] lg:justify-center">
                      <div className="text-sm uppercase mb-2 flex items-center relative w-[100%] lg:w-[40%]">
                        <span className="text-7xl sm:text-8xl mx-auto text-center lg:absolute left-[50%] lg:text-start z-10 mix-blend-difference">
                          {card.ProjectName}
                        </span>
                      </div>
                      <div
                        ref={imageCont}
                        className="imageCont flex items-center justify-center overflow-hidden rounded-md w-[100%] h-[50%] md:h-[70%] lg:h-auto hover:scale-105 duration-300 md:scale-100"
                      >
                        <img
                          className="h-full object-cover"
                          src={card.imgUrl}
                          alt="project-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
