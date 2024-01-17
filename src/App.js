import Instagram from "./Components/Instagram";
import NavBar from "./Components/NavBar";
import Cervezas from "./Screens/Cervezas";
import Home from "./Screens/Home";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Instagram/>
      <Cervezas/>
    </div>
  );
}

export default App;
