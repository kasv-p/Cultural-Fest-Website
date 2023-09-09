import "./App.css";
import NavBar from "./components/NavBar";
import Faqs from "./components/Faqs";
import TeamSection from "./components/Team";
function App() {
  return (
    <div className="App">
      <NavBar />
      <TeamSection />
      <Faqs />
    </div>
  );
}

export default App;
