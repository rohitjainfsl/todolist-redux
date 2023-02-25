import React from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import "./routing.css";
import BlogTemplate from "./BlogTemplate";

//HashRouter
//MemoryRouter

function Home() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<BlogTemplate />}>
            <Route index element={<Blog />} />
            <Route path=":pageId" element={<BlogDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
