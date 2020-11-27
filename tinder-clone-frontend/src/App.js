import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  //BEM class naming
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>

    //SwipeButtons
  );
}

export default App;
