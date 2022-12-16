import logo from "./logo.svg";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOnBoard from "./components/listOnBoard";

import "./App.css";
import CreateBoard from "./components/createAndDisplayBoard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <CreateBoard />
              </>
            }
          />

          <Route path="/:id" element={<ListOnBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
