import { dividerClasses } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./screens/signup";

export const Main = () => {
  return (
    <main>
      <BrowserRouter>
        Sidebar
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
