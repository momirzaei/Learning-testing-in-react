import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import MyCounter from "./components/counter/myCounter";
import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./providers/appProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <header className="App-header">
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
      </header> */}
        {/* <Application /> */}
        <MyCounter />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
