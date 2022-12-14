import logo from "./logo.svg";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import CreateBoard from "./components/createAndDisplayBoard";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <CreateBoard />
    </div>
  );
}

export default App;
