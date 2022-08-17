import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Aboutme from "./Pages/Aboutme";
import Projects from "./Pages/Projects";
import Letswork from "./Pages/Letswork";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Admin from "./Admin/Pages/Admin";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home type="home" />} />
          <Route path="/aboutme" element={<Aboutme type="about" />} />
          <Route path="/projects" element={<Projects type="project" />} />
          <Route path="/portfolio" element={<Letswork type="letswork" />} />
          <Route path="/services" element={<Services type="services" />} />
          <Route path="/blogs" type="blog" >
            <Route index element={<Blog />} />
            <Route path=":id" element={<BlogDetails />} />
          </Route>
          <Route path="/contact" element={<Letswork type="contact" />} />
          <Route path="/admin">
            <Route index element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
