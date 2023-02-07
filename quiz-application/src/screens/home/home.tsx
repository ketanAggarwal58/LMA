import React, {useState, useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import url  from "../../constants";
import "./home.css";

const HomeScreen = () => {

  function generateRandom() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

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
                  field: "quizName",
                  width: 300,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizMaxScore",
                  width: 300,
                  align: "center",
                  headerAlign: "center",
                },
              ]}
              rows={quizData}
              getRowId={(row: any) =>  generateRandom()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
