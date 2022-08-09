import Login from "./Components/Login";
import Series from "./Components/Series";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Routes>
              <Route element={<Login/>} path={"/login"} />
              <Route element={<Series/>} path={"/series"} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
