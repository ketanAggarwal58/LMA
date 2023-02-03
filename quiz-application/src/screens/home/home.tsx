import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import "./home.css";

const HomeScreen = () => {
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
                  field: "Id",
                  width: 200,
                  maxWidth: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "Quiz Name",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "Quiz Max Score",
                  width: 200,
                  align: "center",
                  headerAlign: "center",
                },
              ]}
              rows={[
                {
                  id: 1,
                  Id: 1,
                  "Quiz Name": "@MUI",
                  "Quiz Max Score": 20,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
