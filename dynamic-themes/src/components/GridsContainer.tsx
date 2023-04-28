import "../App.scss";
import {PersonalInfo} from "./PersonalInfo"
import {Contact} from "./Contact";
import {Share} from "./Share"
import{Applications} from "./Applications";

interface GridsProps  {
  theme: string;
  
};

export const GridsContainer = (props: GridsProps) => {
  return (
    <>
      <div className={`gridsContainer ${props.theme}upperPic  ${props.theme}gridsContainer`}>
      <PersonalInfo theme={props.theme}/>
      <Share theme={props.theme}/>
      <Contact theme={props.theme}/>
      <Applications theme={props.theme}/>
      </div>
    </>
  );
};
