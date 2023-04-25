import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import BackgroundPictures from "./components/BackgroundPictures";
import ThemesBar from "./components/ThemesBar";
import GridsContainer from "./components/GridsContainer";

function App() {
  const [theme, setTheme] = useState(0);

  return (
    <div className="wholePage">
      <BackgroundPictures />
      <ThemesBar />
      <GridsContainer />
    </div>
  );
}

export default App;
