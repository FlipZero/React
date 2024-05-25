import logo from './logo.svg';
import Bar from './Bar.js';
import Search from './Search.js';
import Icon from './Icon.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search/>
      <Icon/>
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
      </header>
    </div>
  );
}

export default App;
