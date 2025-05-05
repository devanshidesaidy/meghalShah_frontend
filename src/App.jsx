import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { path } from "./constant";
import Main from "./pages/Main";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Credorbit from "./pages/Credorbit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<Main />} />
        <Route path={path.about} element={<Main screen={<About />} />} />
        <Route path={path.business} element={<Main screen={<Business />} />} />
        <Route path={path.business2} element={<Main screen={<Credorbit />} />} />
        <Route path={path.contact} element={<Main screen={<Contact />} />} />
      </Routes>
    </Router>
  );
}

export default App;
