import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageLoader from "./components/ui/LanguageLoader";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contributors from "./pages/Contributors";
import Contribute from "./pages/Contribute";
import Achievement from "./pages/Achievement";
import QAContact from "./pages/QAContact";
import "./styles/globals.css";
import "./i18n/config";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <LanguageLoader>
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/achievement" element={<Achievement />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/contribute" element={<Contribute />} />
                <Route path="/qa-contact" element={<QAContact />} />
              </Routes>
            </main>
            <Footer />
          </LanguageLoader>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },
              success: {
                style: {
                  background: "#15742A",
                },
              },
              error: {
                style: {
                  background: "#dc3545",
                },
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
