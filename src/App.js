import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Editor from "./components/Editor";
import BrandKitPage from "./components/BrandKitPage";
import Home from "./components/Home";
import HowItsWork from "./components/HowItsWork";
import Login from "./components/Login";
import Register from "./components/Register";
import Priceing from "./components/Priceing";
import LogoPanel from "./components/LogoPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/editor" element={<Editor />}></Route>
          <Route exact path="/brandkitpage" element={<BrandKitPage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/howitwork" element={<HowItsWork />}></Route>
          <Route exact path="/pricing" element={<Priceing />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/logopanel" element={<LogoPanel />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
