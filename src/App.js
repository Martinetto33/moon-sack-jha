import logo from "./logo.svg";
import "./App.css";

import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "cesium";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Viewer full>
          <Entity
            name="tokyo"
            position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
            point={{ pixelSize: 10 }}
          >
            test
          </Entity>
        </Viewer>
      </header>
    </div>
  );
}

export default App;
