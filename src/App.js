import "./App.css";
import NavBar from "./components/NavBar";
import Faqs from "./components/Faqs";
import Sponsors from "./components/Sponsors";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Events from "./components/Events";
import AboutSection from "./components/AboutSection";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ImageAndTimer from "./components/ImageAndTimer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImageAndTimer />
      <AboutSection />
      <Events />
      <Sponsors />
      <TeamSection />
      <Faqs />
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
}

export default App;
