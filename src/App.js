import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';



function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
