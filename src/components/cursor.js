import React, { useState, useEffect, useRef } from "react";

function Cursor(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const circle = useRef(null);
  const OuterCircle = useRef(null);
  
  const cursorStyles = {
    position: "fixed",
    left: 0,
    top: 0,
    transform: `translate(${position.x - 25}px , ${position.y - 25}px) scale(${
      props.scaleAmount
    })`,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    transition: "transform 0.1s linear",
    pointerEvents: "none",
    mixBlendMode: "difference",
  };

  useEffect(() => {
    circle.current.innerHTML = props.hoverChanges.text;
    props.hoverChanges.text ? circle.current.style.background = "#ca2655" : circle.current.style.background = "white";
    OuterCircle.current.style.width = props.hoverChanges.styles.width;
  }, [props.hoverChanges]);
  
  return (
    <div className="z-10 hidden lg:block" ref={OuterCircle} style={cursorStyles}>
      <div
        ref={circle}
        className="text-[white] flex items-center justify-center text-lg rounded-full h-[100%] w-[100%]"
      ></div>
    </div>
  );
}

export default Cursor;
