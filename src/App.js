import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import logo from "./logo.svg";
// import "./App.css";
import "./styles/global.scss"
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      {/* <h2>Hello World</h2> */}
    </div>
  );
}

export default App;
