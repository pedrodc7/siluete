import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap" rel="stylesheet" />
      </header>
      <body>

        <div className="App-topbar">
            <a href="#">
              ICON
            </a>
            <div className="App-topbar-right">
              <a href= "#">What</a>
              <a href= "#">Why</a>
              <a href= "#">How</a>
              <button>Go to app</button>
            </div>
        </div>

        <div className="App-core-content">
          <h1>
            Why title
          </h1>
          <p>
            This is why it matters
          </p>
        </div>

      </body>
    </div>

  );
}

export default App;
