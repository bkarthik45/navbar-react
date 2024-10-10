import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import {Route, Routes} from "react-router-dom"
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

function App() {
  return (
   <div className="App">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />

      <Route path ="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/services" element={<Services/>} />

    </Routes>
   </div>
  );
}

export default App;
