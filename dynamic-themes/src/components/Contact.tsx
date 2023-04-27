import { MdLibraryAddCheck } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";

type ContactProps = {
  theme: string;
};

export const Contact = (props: ContactProps) => {
  const buttons = [
    { icon: MdLibraryAddCheck, text: "add contact" },
    { icon: FaGlobe, text: "visit website" },
  ];

  return (
    <div className="gridContactContainer">
      {/* <div className={`contactMethod `}>
        <div className="logotextbox logoTop">
          <MdLibraryAddCheck className={`logo react-icons${props.theme}`} />
        </div>
        <div className="logotextbox centerMiddle">
          <h4>add contact</h4>
        </div>
      </div>

      <div className={`contactMethod `}>
        <div className="logotextbox">
          <FaGlobe className={`logo react-icons${props.theme}`} />
        </div>
        <h4 className="logotextbox">visit website</h4>
      </div> */}

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
