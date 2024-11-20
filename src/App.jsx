import "./App.css";
import Choose from "./components/Choose";
import Company from "./components/Company";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Company />
      <Choose />
    </div>
  );
}

export default App;
