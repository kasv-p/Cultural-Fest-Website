import "./App.css";
import NavBar from "./components/NavBar";
import Faqs from "./components/Faqs";
import Sponsors from "./components/Sponsors";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Events from "./components/Events";
// import AboutSection from "./components/AboutSection";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <AboutSection /> */}
      <Events />
      <Sponsors />
      <TeamSection />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
