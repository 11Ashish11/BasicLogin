import logo from "./logo.svg";
import "./App.css";
import { CSSProps } from "./customCSS";
import {Login} from "./Login";

function App() {

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <img src={logo} />
        </div>
        <div className="column1">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
