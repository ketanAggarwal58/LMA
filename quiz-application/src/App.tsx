import "./App.css";
import UserScreen from "./screens/users/user";
import SideBar from "./screens/global/sidebar/sidebar";
// import LoginScreen from "./screens/login";
// import SignUpScreen from "./screens/signup";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <UserScreen />
      </div>
    </div>
  );
}

export default App;
