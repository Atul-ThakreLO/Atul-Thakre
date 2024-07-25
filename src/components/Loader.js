import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";

function Loader() {
  const logoText = "Logers";
  const navRef = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(".loaderName span", {
      y: 100,
      duration: 0.5,
      delay: 0.7,
      ease: "power4.out",
      stagger: 0.1,
    });
    timeline.to(navRef.current, {
      width: 241,
      height: 96,
      backgroundColor: "white",
      color: "black",
      duration: 0.5,
    });
    timeline.to(navRef.current, {  
      display: "block",
    })
    timeline.to(".loaderName span", {
      color: "black",
      delay: -0.5,
    });
    timeline.from(".loaderName span", {
      y: -110,
      duration: 1,
      delay: 0.2,
      ease: "power4.out",
      stagger: 0.1,
    });
    timeline.to(".loaderName span", {
      y: 0,
      duration: 0.5,
      ease: "power4.out",
      stagger: 0.1,
    });
    timeline.to(navRef.current, {
      display: "none",
    //   opacity: 0.5,
    });
  });

  useEffect(() => {
        window.scrollTo(0,0);
  }, [])

  return (
    <div>
      <div
        className="w-[100vw] h-[100vh] flex items-center justify-center z-50 fixed bg-black"
        ref={navRef}
      >
        <div className="loaderName overflow-hidden mt-3 ml-4 sm:ml-8 md:ml-16">
          {logoText.split("").map((letter, index) => {
            return (
              <span key={index} className="inline-block text-4xl sm:text-5xl md:text-6xl text-white mb-3">
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Loader;
