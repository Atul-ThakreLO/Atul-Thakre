import React, { useState, useEffect } from "react";
import ProgressCard from "./ProgressCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ProgressSkills(props) {
  const [innerText, setInnerText] = useState("");
  const [cursorStyles, setCursorStyles] = useState({
    backgroundColor: "white",
    width: "50px",
  });

  useEffect(() => {
    props.onHover(innerText, cursorStyles);
  }, [innerText, cursorStyles]);

  function handleOver() {
    setInnerText("Click Link");
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

  useGSAP(() => {
    gsap.from(".headingL", {
      y: -200,
      duration: 0.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".headingL",
        start: "top 50%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });


  return (
    <div className="bg-zinc-50 w-full pb-10 mb-10 shadow-lg">
      <div className="w-[90%] mx-auto text-black py-10 px-0 sm:px-10 md:px-4">
        <div className="w-max mx-auto mb-20 mt-10 text-center font-[600]">
          <div className="overflow-hidden mb-4">
            <p className="headingL text-6xl sm:text-8xl mb-4">My Learning</p>
          </div>
          <div className="overflow-hidden pb-4">
            <p
              className="headingL text-6xl sm:text-8xl text-zinc-50"
              style={{
                textShadow:
                  "-1px -1px 0 gray, 1px 1px 0 gray, -1px 1px 0 gray, 1px -1px 0 gray",
              }}
            >
              Progress
            </p>
          </div>
        </div>
        <div onMouseOver={handleOver} onMouseLeave={handleLeave}>
          <ProgressCard />
        </div>
      </div>
    </div>
  );
}

export default ProgressSkills;
