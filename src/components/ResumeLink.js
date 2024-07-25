import React from "react";

function ResumeLink() {
  return (
    <a
      href="/assets/Atul-Resume.pdf"
      className="p-4  hover:bg-[#ca2655] h-min bg-transparent border-2 border-[#ca2655] text-white duration-300 rounded-full sm:ml-5"
      target="_blank"
      rel="noreferrer"
      download
    >
      <span className="ml-4 inline-block" >Download Resume</span>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="35"
        fill="currentColor"
        className="inline-block mx-4"
        viewBox="0 0 16 20"
      >
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0" />
      </svg>
    </a>
  );
}

export default ResumeLink;
