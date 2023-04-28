import React from "react";
import { GridsContainer } from "./GridsContainer";
import { BackgroundPictures } from "./BackgroundPictures";
import { Nav } from "./Nav";

interface PageProps {
  colour: "GreyOrange" | "Purple" | "Red" | "Teal" | "Yellow";
}

export const Page = ({ colour }: PageProps) => {
  return (
    <>
      <div>
        <div className="wrapper">
         <Nav />
          <div className={`mobilePage select${colour}lowerPic`}>
            <BackgroundPictures theme={`select${colour}`} />
            <GridsContainer theme={`select${colour}`} />
          </div>
        </div>
      </div>
    </>
  );
};
