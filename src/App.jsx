import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { path } from "./constant";
import Main from "./pages/Main";




function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<Main />} />
        {/* <Route path={path.about} element={<Home screen={<About />} />} /> */}
       
      </Routes>
    </Router>
  );
}

export default App;
