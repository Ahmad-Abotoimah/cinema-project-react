import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      {/* <!-- =============== START OF WRAPPER =============== --> */}
      <div className="wrapper">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
