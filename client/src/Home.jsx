import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./MessageBoard";

import StuffForm  from "./StuffForm";
import './App.css'
import './Home.css'
function Home() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/"> Home  </Link>
          <Link to="/MessageBoard"> MessageBoard  </Link>
          <Link to="/StuffForm"> Submit Message  </Link>
        </nav>
        
        <Routes>
            <Route path="/" element = {<div><h1>Welcome to My Video Game Opinion Board</h1>
        <h2>By Connor Lansdown</h2></div>}/>
          <Route path="/MessageBoard" element={<App />} />
         
          <Route path="/StuffForm" element={<StuffForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Home;