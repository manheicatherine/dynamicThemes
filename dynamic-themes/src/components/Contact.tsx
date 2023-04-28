import { MdLibraryAddCheck } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

interface ContactProps  {
  theme: string;
};

export const Contact = (props: ContactProps) => {
  const buttons = [
    { icon: MdLibraryAddCheck, text: "add contact" },
    { icon: FaGlobe, text: "visit website" },
  ];

  return (
    <div className="gridContactContainer">
      {buttons.map((each) => {
        const Icon = each.icon;
        return (
          <div className={`contactMethod `}>
            <div className="logotextbox logoTop">
              <Icon className={`logo react-icons${props.theme}`} />
            </div>
            <div className="logotextbox centerMiddle">
              <h4>{each.text}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
