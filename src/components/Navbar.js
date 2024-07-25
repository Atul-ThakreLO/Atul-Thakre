import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function Navbar(props) {
  const [scale, setScale] = useState(1);
  const logoText = "Logers";
  const navRef = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline();
    // timeline.from(".logo span", {
    //   y: 100,
    //   duration: 0.5,
    //   delay: 0.7,
    //   ease: "power4.out",
    //   stagger: 0.1,
    // });
    // timeline.to(navRef.current, {
    //   width: 250,
    //   height: 100,
    //   backgroundColor: "black",
    //   color: "white",
    //   duration: 0.5,
    // });
    // timeline.to(".logo span", {
    //   color: "white",
    //   delay: -0.5,
    // })
    // timeline.from(".logo span", {
    //   y: -110,
    //   duration: 1,
    //   delay: 0.2,
    //   ease: "power4.out",
    //   stagger: 0.1,
    // });
    // timeline.to(".logo span", {
    //   y: 0,
    //   duration: 0.5,
    //   ease: "power4.out",
    //   stagger: 0.1,
    // });
  });

  useEffect(() => {
    props.onHover(scale);
  }, [scale, props]);

  return (
    <nav
      className="mix-blend-difference fixed z-10"
      ref={navRef}
    >
      <div
        className="mx-auto"
        onMouseOver={() => {
          setScale(3);
          console.log("Entered-logo", scale);
        }}
        onMouseLeave={() => {
          setScale(1);
          console.log("leaved-logo", scale);
        }}
      >
        <div className="logo overflow-hidden mt-3 ml-4 sm:ml-8 md:ml-16">
          {logoText.split("").map((letter, index) => {
            return (
              <span key={index} className="inline-block text-4xl sm:text-5xl md:text-6xl text-white mb-3">
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
