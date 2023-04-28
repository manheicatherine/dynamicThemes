import { CgSmartphoneShake } from "react-icons/cg";
import { BiMailSend } from "react-icons/bi";
import { SiTiktok } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";

interface ApplicationsProps {
  theme: string;
};

export const Applications = (props: ApplicationsProps) => {
  const buttons = [
    { icon: CgSmartphoneShake, text: "call" },
    { icon: BiMailSend, text: "email" },
    { icon: SiTiktok, text: "tik\u00A0tok" },
    { icon: FaSpotify, text: "spotify" },
  ];

  return (
    <div className="gridAppContainer">
       {buttons.map((each) => {
        const Icon = each.icon;
        return (
          <div className={`app `}>
        <Icon className={`react-icons${props.theme}`} />
        <h4>{each.text}</h4>
      </div>
        );
      })}
    </div>
  );
};
