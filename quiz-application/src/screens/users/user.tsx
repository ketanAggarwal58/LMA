import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import "./user.css";

const UserScreen = () => {
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
      <span>All Quizes</span>
      <div style={{ height: 500, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 4 }}>
            <DataGrid
              columns={[
                {
                  field: "Id",
                  width: 100,
                  maxWidth: 200,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "First Name",
                  width: 150,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "Last Name",
                  width: 150,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "Email",
                  width: 270,
                  align: "center",
                  headerAlign: "center",
                },
                {
                  field: "Phone",
                  width: 150,
                  align: "center",
                  headerAlign: "center",
                },
              ]}
              rows={[
                {
                  id: 1,
                  Id: 1,
                  "First Name": "Ketan",
                  "Last Name": "Aggarwal",
                  "Email": "ketanaggarwal58@gmail.com",
                  "Phone": "+91"+ " " +"8570842070",
                },
                {
                  id: 2,
                  Id: 2,
                  "First Name": "Ketan",
                  "Last Name": "Aggarwal",
                  "Email": "ketanaggarwal58@gmail.com",
                  "Phone": "+91"+ " " +"8570842070",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserScreen;
