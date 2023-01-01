import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonals from "./components/testimonials/Testimonals";
import Virtual from "./components/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default App;
