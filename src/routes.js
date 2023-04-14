import Footer from "components/Footer";
import Post from "components/Post";
import DefaultPage from "pages/DefaultPage";
import NotFound from "pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<HomePage />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="post/:id/*" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>

  );
}

export default AppRoutes;
