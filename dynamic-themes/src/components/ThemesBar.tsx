import { useParams } from "react-router-dom";

type ThemesBarProps = {
  // setTheme:React.Dispatch<React.SetStateAction<string>>
}

export const ThemesBar = (props : ThemesBarProps) => {
  const { themeColor } = useParams();
  return (
    <div>
        {/* <div className="theme-options" >
        <div className="greyOrange selectBox" 
        // onClick={()=> props.setTheme("selectGreyOrange")}
        />
        <div className="teal selectBox" 
        // onClick={()=> props.setTheme("selectTeal")}
        />
        <div className="yellow selectBox" 
        // onClick={()=> props.setTheme("selectYellow")}
        />
        <div className="red selectBox" 
        // onClick={()=> props.setTheme("selectRed")}
        />
        <div className="purple selectBox" 
        // onClick={()=> props.setTheme("selectPurple")}
        />
      </div> */}
    </div>
  )
}
