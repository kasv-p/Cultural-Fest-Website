import "./App.css";
import NavBar from "./components/NavBar";
import Faqs from "./components/Faqs";
import Events from "./components/events";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Events />
      <Faqs />
    </div>
  );
}

export default App;
