import React, {useState, useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import "./user.css";
import url from '../../constants'

const UserScreen = () => {

  const [quizUser, setQuizUser] = useState([])

  useEffect(
    () => {
      fetch(url+"quizuser").then((data) => data.json()).then((data) => setQuizUser(data))
    },[]
  )

  return (
    <div className="user">
      <div className="userButton">
        <AccountCircleIcon
          sx={{
            marginLeft: 2,
            marginRight: 2,
          }}
        />
        UserName
      </div>
      <span>All Users</span>
      <div style={{ height: 500, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 4 }}>
            <DataGrid
              columns={[
                {
                  field: "id",
                  width: 100,
                  maxWidth: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "firstName",
                  width: 150,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "lastName",
                  width: 150,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "email",
                  width: 270,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "phone",
                  width: 150,
                  align: "center",
                  headerAlign: "center",
                },
              ]}
              rows={
                quizUser
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserScreen;
