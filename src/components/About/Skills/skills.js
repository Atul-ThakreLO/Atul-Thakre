import React, { useEffect, useState } from "react";
import { skillsData, categories } from "./skillsData";
import SkillButtons from "./SkillButtons";
import SkillsCard from "./SkillsCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Skills() {
  const [filteredSkill, setFilteredSkill] = useState(skillsData);
  function handleFilter(category) {
    const filtered = skillsData.filter((data) => {
      return data.category === category;
    });
    if (filtered.length > 0) {
      setFilteredSkill(filtered);
      console.log(filtered.length);
    } else {
      setFilteredSkill(skillsData);
    }
  }

  useGSAP(() => {
    gsap.from(".heading", {
      y: -100,
      duration: 0.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".heading",
        start: "top 60%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <div className="w-[90%] mx-auto text-white py-10 px-4 sm:px-20">
      <div className="w-max mx-auto mb-32 mt-10 text-center font-[600]">
        <div className="overflow-hidden mb-4">
          <p className="heading text-6xl sm:text-8xl">What I've</p>
        </div>
        <div className="overflow-hidden">
          <p
            className="heading text-6xl sm:text-8xl text-zinc-900"
            style={{
              textShadow:
                "-0.5px -0.5px 0 gray, 0.5px 0.5px 0 gray, -0.5px 0.5px 0 gray, 0.5px -0.5px 0 gray",
            }}
          >
            Learned
          </p>
        </div>
      </div>
      <SkillButtons onFilter={handleFilter} ButtCategories={categories} />
      <SkillsCard data={filteredSkill} />
    </div>
  );
}

export default Skills;
