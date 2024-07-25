import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function SkillsCard(props) {
  useEffect(() => {
    gsap.from(".skills", {
      scale: 0,
      duration: 0.3,
      stagger: 0.05,
    });
  }, [props.data]);
  useGSAP(() => {
    gsap.from(".grid", {
      opacity: 0,
      y: -200,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".grid",
        start: "top 50%",
        end: "top 100%",
        toggleActions: "play none reverse none",
      },
    });
  });

  const cardStyle = {
    boxShadow:
      "5px 3px 10px 0 rgba(0, 0, 0, 0.9), -3px -3px 10px 0 rgba(255, 255, 255, 0.1)",
  };
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-5 gap-4">
        {props.data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-center rounded-xl py-4 mx-4 text-center mb-4 text-lg skills"
              style={cardStyle}
            >
              {data.skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsCard;
