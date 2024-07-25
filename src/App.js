import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Cursor from "./components/cursor";
import Scroller from "./components/Scroller";
import About from "./components/About/About";
import Demo from "./components/demo";
import Projects from "./components/Projects/Projects";
import Loader from "./components/Loader";
import StartProject from "./components/StartProject";
import Footer from "./components/Footer";
import FollowMe from "./components/FollowMe";


function App() {
  const [scale, setScale] = useState(1);
  const [styles, setStyles] = useState({
    text: "",
    styles: {},
  });

  function handle(amount) {
    setScale(amount);
  }
  function handleHover(innerText, cursorStyles) {
    setStyles({
      text: innerText,
      styles: cursorStyles,
    });
  }

  ////////////////////////////////locomotive scroll/ /////////////////////////////////

  return (
    <div className="bg-white overflow-x-hidden">
      <Loader />
      <Navbar onHover={handle}/>
      <Cursor scaleAmount={scale} hoverChanges={styles}/>
      <Scroller />
      <Landing onHover={handle} />
      <About onHoverStyles={handleHover}/>
      <Projects onHoverStyles={handleHover} />
      <StartProject />
      <FollowMe />
      <Footer />
    </div>
  );
}

export default App;
