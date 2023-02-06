import React, {useState, useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import url  from "../../constants";
import "./home.css";

const HomeScreen = () => {

  const [quizData, setQuizData] = useState([])

  useEffect(
    () => {
      fetch(url+"quizdata").then((data) => data.json()).then((data) => setQuizData(data))
    },[]
  )

  return (
    <div className="home">
      <div className="userButton">
        <AccountCircleIcon
          sx={{
            marginLeft: 2,
            marginRight: 2,
          }}
        />
        UserName
      </div>
      <span>All Quizes</span>
      <div style={{ height: 500, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 4 }}>
            <DataGrid
              columns={[
                {
                  field: "id",
                  width: 200,
                  maxWidth: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizName",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizMaxScore",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
              ]}
              rows={quizData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
