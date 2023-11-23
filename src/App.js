import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// index.js or App.js
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BiAlarm } from "react-icons/bi";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialMeida_links from "./components/SocialMeida_links";
import MainHealineData from "./components/MainHealineData";
import CenterText from "./components/CenterText";
import TogetherContainer from "./components/TogetherContainer";
import OurWinning from "./components/Our_winning";
import ReadBlocks from "./components/ReadBlocks";
function App() {
  return (
    <div className="App">
      <Header />
      <MainHealineData />
      <CenterText />
      <ReadBlocks />
      <OurWinning />

      <SocialMeida_links />
      <TogetherContainer />
      <Footer />
    </div>
  );
}

export default App;
