import React from "react";
type BackgroundPicturesProps = {
  theme: string;
};
export const BackgroundPictures = (props: BackgroundPicturesProps) => {

 
  return (
    <>
      {/* <div className={`upperPic ${props.theme}upperPic`}>
      </div>
      <div className={`lowerPic ${props.theme}lowerPic`}></div> */}

<div className = {`upperPic ${props.theme}upperPic `}>
      <div className = {`lowerPic ${props.theme}lowerPic`}>

      </div>
      </div>
    </>
  );
};





