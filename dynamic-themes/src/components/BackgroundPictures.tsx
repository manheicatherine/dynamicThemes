import React from "react";
interface BackgroundPicturesProps  {
  theme: string;
};
export const BackgroundPictures = (props: BackgroundPicturesProps) => {

 
  return (
    <>
    
<div className = {` ${props.theme}upperPic `}>
      <div className = {`mobilePage ${props.theme}lowerPic`}>
      </div>
      </div>
    </>
  );
};





