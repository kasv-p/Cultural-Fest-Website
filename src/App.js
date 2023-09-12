import React from 'react';
import "./App.css";
import Events from "./components/Events";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from './components/Header';
import NavBar from "./components/NavBar";
import Sponsors from "./components/Sponsors";
import TeamSection from "./components/TeamSection";
import ScrollToTopBtn from './components/scrollToTop/scrollToTopBtn';
// import AboutSection from "./components/AboutSection";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      {/* <AboutSection /> */}
      <Events />
      <Sponsors />
      <TeamSection />
      <Faqs />
      <Footer />
      <ScrollToTopBtn/>
    </div>
  );
}

export default App;
