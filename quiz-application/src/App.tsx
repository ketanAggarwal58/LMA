import "./App.css";
import UserScreen from "./screens/users/user";
import SideBar from "./screens/global/sidebar/sidebar";
import HomeScreen from "./screens/home/home";
import { BrowserRouter, Route, Routes, NavLink, useLocation } from "react-router-dom";
import NewQuizScreen from "./screens/quiz/newQuiz/newQuiz";
import AllQuizQuestionsScreen from "./screens/quiz/allQuiz/allQuiz";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <BrowserRouter>
        <SideBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/questions" element={<AllQuizQuestionsScreen />} />
            <Route path="/users" element={<UserScreen />} />
            <Route path="/add/quiz" element={<NewQuizScreen />} />
            <Route path="/quiz/score" element={<UserScreen />} />
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
