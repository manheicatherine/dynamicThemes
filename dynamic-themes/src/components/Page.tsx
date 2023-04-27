import React from "react";
import { GridsContainer } from "./GridsContainer";
import { BackgroundPictures } from "./BackgroundPictures";

interface PageProps {
  colour: "GreyOrange" | "Purple" | "Red" | "Teal" | "Yellow";
}

export const Page = ({ colour }: PageProps) => {
  return (
    <>
      <div>
        <div className="wrapper">
          <div className="mobilePage">
            {/* <BackgroundPictures theme={`select${colour}`} />
            <GridsContainer theme={`select${colour}`} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
