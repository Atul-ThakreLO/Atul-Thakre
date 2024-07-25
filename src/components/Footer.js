import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function Footer() {
  const scrollingText = useRef(null);
  const footerRef = useRef(null);
  const [year, setYear] = useState(null);

  useGSAP(() => {
    gsap.to(scrollingText.current, {
      x: "-52.5%",
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
    gsap.from(footerRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 110%",
        end: "top 100%",
        toggleActions: "play none reverse none",
      },
    });
    gsap.from(".footer-h", {
      y: -100,
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".footer-h",
        start: "top 110%",
        end: "top 100%",
        toggleActions: "play none reverse none",
      },
    });
  });

  useEffect(() => {
    const year = new Date().getFullYear();
    setYear(year);
  });

  return (
    <div>
      <div className="bg-[#ca2655] py-2">
        <div
          className="flex gap-10 p-0 m-0 text-4xl flex-nowrap whitespace-nowrap relative -left-[50%] "
          ref={scrollingText}
        >
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
          <p className="p-0 m-0">Thank You for Scroling</p>
        </div>
      </div>
      <div ref={footerRef} className="bg-black text-white pt-8">
        <div className="border-b-2">
          <div className="w-[90%] mx-auto mb-16">
            <div className="mb-10">
              <p className="text-center text-6xl mb-10 footer-h">Logers</p>
              <p className="text-center text-3xl">
                The portfolio web is created and designed by{" "}
                <span className="underline">Atul Thakre-[Logers]</span>
              </p>
            </div>
            <div className="links text-xl">
              <span>For collabration and bussines related contact- </span>
              <a href="mailto:logersat30@gmail.com" className="text-[#71967d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#71967d"
                  className="bi bi-envelope-fill inline-block mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                Logers
              </a>
              <br />
              <span>For DM- </span>{" "}
              <a href="mailto:atullr3019@gmail.com" className="text-[#71967d]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#71967d"
                  className="bi bi-envelope-fill inline-block mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                Atul Thakre
              </a>
            </div>
          </div>
        </div>
        <div className="copyright text-center pt-2 pb-4">
          Copyright © {year}{" "}
          <span className="underline">Atul Thakre-[Logers]</span>. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
