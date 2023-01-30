import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Main from "../Main/Main";

function PageBody() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default PageBody;
