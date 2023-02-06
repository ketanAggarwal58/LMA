import "./sidebar.css";
import { useState } from "react";
import { SideBarData } from "../../data/data";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import {Link, Route, Routes} from "react-router-dom";
import { color } from "@mui/system";

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
                className={selected === index ? "menuItems active" : "menuItems"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <Link to={item.to} style={{color:"black", textDecoration: "none", gap: "1rem", display: "flex", justifyContent: "center", alignContent:"center"}}>
                  <item.icon />
                  <span>{item.heading}</span>
                  </Link>
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
