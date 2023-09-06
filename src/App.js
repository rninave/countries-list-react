import "./App.css";
import Home from "./page/Home";
import Counrtydetails from "./page/Countrydetails";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/countries/:countryCode"
              element={<Counrtydetails />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
