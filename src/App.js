import Header from "./components/header/Header";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailsPages from './pages/details/DetailsPages'
import Footer  from "./components/footer/Footer";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="details/:title" element={<DetailsPages />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
