import React, { useState } from "react";
import ProjectCards from "./ProjectElements/ProjectCards";
import ProjectDiscription from "./ProjectElements/ProjectDiscription";
import ProjectDiscriData from "./ProjectElements/ProjectDiscriData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function Projects(props) {
  const [height, setHeight] = useState("0vh");
  const [filteredDiscri, setFilteredDiscri] = useState([]);
  function handleHeight(height) {
    setHeight(height);
  }

  function handleHover(innerText, cursorStyles) {
    props.onHoverStyles(innerText, cursorStyles);
  }

  function onFilterDiscri(name) {
    const filtered = ProjectDiscriData.filter((data) => {
      return data.Name === name;
    });
    setFilteredDiscri(filtered);
  }

  useGSAP(() => {
    gsap.from(".project-heading", {
      x: -300,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".project-heading",
        start: "top 60%",
        end: "top 80%",
        toggleActions: "play none reverse none",
      },
    });
  });

  return (
    <div>
      <div className="w-full">
        <div className="w-full border-b-2 border-[#ca2655] py-8 bg-zinc-100">
          <div className="w-[90%] mx-auto pt-10 pb-4 text-7xl sm:text-8xl text-center">
            <h1 className="project-heading pb-4">Featured projects</h1>
          </div>
        </div>
        <ProjectCards
          onDescription={handleHeight}
          onHover={handleHover}
          onFilterDiscri={onFilterDiscri}
        />
      </div>
      <ProjectDiscription
        toggleHeight={height}
        onDescription={handleHeight}
        data={filteredDiscri}
      />
    </div>
  );
}

export default Projects;
