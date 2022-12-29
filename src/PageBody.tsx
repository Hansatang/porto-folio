import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Main from "./components/Main/Main";

function PageBody() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Swirl" element={<About />} />
    </Routes>
  );
}

export default PageBody;
