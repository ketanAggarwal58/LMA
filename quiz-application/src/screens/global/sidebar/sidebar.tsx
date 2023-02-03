import "./sidebar.css";
import { useState } from "react";
import { SideBarData } from "../../data/data";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const SideBar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        {/* <img src="" alt=""></img> */}
        <span>
          <span>Quiz</span> Application
        </span>
      </div>

      <div className="menu">
        {SideBarData.map((item, index) => {
          return (
            <div
              className={selected == index ? "menuItems active" : "menuItems"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItems">
          <ExitToAppOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
