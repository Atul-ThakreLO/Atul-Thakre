import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function SkillButtons(props) {
  const [active, setActive] = useState(null);
  function handleClick(id) {
    setActive(id);
  }

  useGSAP(() => {
    gsap.from(".skill-bt", {
      y: -100,
      opacity: 0,
      duration: 0.1,
      scrollTrigger: {
        trigger: ".bt-container",
        start: "top 60%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <div className="bt-container">
      <div className="overflow-x-auto mb-32 skill-bt">
        <div className="buttons w-max mx-auto">
          <button
            className="px-10 mb-4 rounded-xl py-2 hover:bg-[#71967d] duration-300 border-2 border-[#ca2655] mx-4"
            style={{
              backgroundColor: active === null ? "#71967d" : "transparent",
              borderColor: active === null ? "#71967d7a" : "#ca26557a",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleClick(null);
              props.onFilter(null);
            }}
          >
            All
          </button>
          {props.ButtCategories.map((category, i) => {
            return (
              <button
                key={i}
                className="px-10 mb-4 rounded-xl py-2 hover:bg-[#71967d] duration-300 border-2 border-[#ca2655] mx-4"
                id={i}
                style={{
                  backgroundColor: active === i ? "#71967d" : "transparent",
                  borderColor: active === i ? "#71967d7a" : "#ca26557a",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(i);
                  props.onFilter(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillButtons;
