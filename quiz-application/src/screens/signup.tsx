import { Button, Input, Typography, InputAdornment } from "@mui/material/";
import { AccountCircle, Lock } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import "./style/signup.css";

const SignUpScreen = () => {
  return (
    <div className="signup">
      <div className="signupCard">
        <Typography
          variant="h4"
          component="h2"
          style={{ textAlign: "center" }}
          sx={{
            paddingTop: 3,
            fontStyle: "italic",
          }}
        >
          Sign Up!
        </Typography>
        <Input
          sx={{
            marginTop: 4,
            marginLeft: 9,
          }}
          placeholder="First Name"
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
          placeholder="Last Name"
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
          placeholder="Phone No"
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
            marginLeft: 17,
          }}
        >
          Sign Up
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: 12,
            marginTop: 3,
            marginLeft: 8,
          }}
        >
          Already have an account then{" "}
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

export default SignUpScreen;
