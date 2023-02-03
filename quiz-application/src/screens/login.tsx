import { Button, Input, Typography, InputAdornment } from "@mui/material/";
import { AccountCircle, Lock } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import "./style/login.css";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="loginCard">
        <Typography
          variant="h4"
          component="h2"
          style={{ textAlign: "center" }}
          sx={{
            paddingTop: 3,
            fontStyle: "italic",
          }}
        >
          Login!
        </Typography>
        <Input
          sx={{
            marginTop: 4,
            marginLeft: 9,
          }}
          placeholder="Email"
          id="input-user"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <Input
          sx={{
            marginTop: 4,
            marginLeft: 9,
          }}
          placeholder="Password"
          type="password"
          startAdornment={
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          }
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            marginTop: 4,
            fontSize: 12,
            marginLeft: 18,
          }}
        >
          Log In!
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: 12,
            marginTop: 3,
            marginLeft: 10,
          }}
        >
          Don't have an Account then{" "}
          {/* <Link
            to="/signup"
            onClick={() => {
            }}
          >
            Sign up!
          </Link> */}
        </Typography>
      </div>
    </div>
  );
};

export default LoginScreen;
