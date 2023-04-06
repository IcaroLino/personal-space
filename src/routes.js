import Footer from "components/Footer";
import Post from "components/Post";
import DefaultPage from "pages/DefaultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<HomePage />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="post/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>

  );
}

export default AppRoutes;
