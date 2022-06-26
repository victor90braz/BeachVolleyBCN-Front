import "./App.css";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Header from "./components/HeaderComponent/Header";
import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
