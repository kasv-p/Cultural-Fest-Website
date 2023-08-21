import '@fortawesome/fontawesome-free/css/all.css';
import "./App.css";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Faqs />
      <Footer/>
    </div>
  );
}

export default App;
