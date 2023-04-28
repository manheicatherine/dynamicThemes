import { FaShareAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";

interface ShareProps  {
  theme: string;
};

export const Share = (props: ShareProps) => {
  return (
    <div className={`gridShareContainer `}>
      <div className="column">
        <FaShareAlt className={` react-icons${props.theme}`} />
        <h4>share</h4>
      </div>
      <div className="column">
        <RxDividerVertical />
      </div>
      <div className="column">
        <HiLocationMarker className={`react-icons${props.theme}`} />
        <h4>direction</h4>
      </div>
    </div>
  );
};
