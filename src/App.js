import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ProjectDetails from './Pages/ProjectDetails';



function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path="/moreInfo" element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path="/contact" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
