import "./App.css";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollToTopBtn from "./components/scrollToTop/scrollToTopBtn";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Faqs />
      <Footer/>
      <ScrollToTopBtn/>
    </div>
  );
}

export default App;
