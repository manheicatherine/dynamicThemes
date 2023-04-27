import { CgSmartphoneShake } from "react-icons/cg";
import { BiMailSend } from "react-icons/bi";
import { SiTiktok } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";

type ApplicationsProps = {
  theme: string;
};

export const  Applications =(props: ApplicationsProps) =>{

  return (
    <div className="gridAppContainer">
    <div className={`app`}>
        <CgSmartphoneShake className={`react-icons${props.theme}`}/>
      <h4> call
      </h4>
    </div>
    <div className={`app `}>
        <BiMailSend className={`react-icons${props.theme}`}/>
      <h4>
        email
      </h4>
    </div>
    <div className={`app `}>
        <SiTiktok className={`react-icons${props.theme}`}/>
      <h4>
        tik&nbsp;tok
      </h4>
    </div>
    <div className={`app `}>
        <FaSpotify className={`react-icons${props.theme}`}/>
      <h4 >
        spotify
      </h4>
    </div>
  </div>
  )
}
