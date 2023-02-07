import React, {useState, useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import url  from "../../../constants";
import "./allQuiz.css";

const AllQuizQuestionsScreen = () => {

  const [quizData, setQuizData] = useState([])

  useEffect(
    () => {
      fetch(url+"quizdata/all").then((data) => data.json()).then((data) => setQuizData(data))
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
      <span>All Quiz Questions</span>
      <div style={{ height: 500, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 4 }}>
            <DataGrid
              columns={[
                {
                  field: "quizName",
                  width: 120,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizQuestion",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizAnswer1",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizAnswer2",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizAnswer3",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "quizAnswer4",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "correctAnswer",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "questionScore",
                  width: 120,
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

  function generateRandom() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
};

export default AllQuizQuestionsScreen;