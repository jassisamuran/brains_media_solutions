import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <h5>our awesome Clients</h5>
      <h3>Our services are trusted by</h3>
      <Footer />
    </div>
  );
}

export default App;
