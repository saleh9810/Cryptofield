import Apps from "./components/Apps";
import ContactUs from "./components/ContactUs";
import Documentation from "./components/Documentation";
import Faq from "./components/Faq";
import Footer from "./shared/Footer";
import Home from "./components/Home";
import Ico from "./components/Ico";
import Leadership from "./components/Leadership";
import Partners from "./components/Partners";
import Process from "./components/Process";
import Pyramids from "./components/Pyramids";
import Road from "./components/Road";
import Token from "./components/Token";
import Updated from "./components/Updated";

function App() {
  return (
    <div className="App">
      <Home />
      <Ico />
      <Process />
      <Token />
      <Documentation />
      <Road />
      <Pyramids />
      <Apps />
      <Leadership />
      <Partners />
      <Faq />
      <ContactUs />
      <Updated />
      <Footer />
    </div>
  );
}

export default App;
