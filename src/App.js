import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>

        <div className="App-topbar">
            <a className="Home-button" href="#">SILUETE</a>
            <div>
            <a className="Menu-button" href= "#">Why</a>
            <a className="Menu-button" href= "#">What</a>
            <a className="Menu-button" href= "#">How</a>
            <button className="App-button">Go to app</button>
            </div>
        </div>

        <div className="App-body">
          <h1>
            About you, all encrypted! 
            <p/>
            Sell and share with whom you want.  
          </h1>
          Siluete is a model to help you store securely information about you. Only you control this information.
          You decide who has access to it, what they have access to and for how long.
          Share your email, bank details, advertisement preferences and even a personality profile with a head-hunter.
          <p/>
          It is work in progress and the App that you can access above will be the showing how the various uses-cases take shape as the project progress.
        </div>

        <footer className="App-footer">
          <p>siluete, inc</p>
          <p> Chat to us on Discord</p>
          <img src="assets/discord-icon.png"></img>
        </footer>

      </body>
    </div>

  );
}

export default App;
