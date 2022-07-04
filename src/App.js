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
            <a className="Menu-button" href= "#about">About</a>
            <a className="Menu-button" href= "#share">Share</a>
            <a className="Menu-button" href= "#control">Control</a>
            <a className="Menu-button" href="https://app.siluete.xyz/"> Go to app {'>'}</a>
            </div>
        </div>

        <div className="App-body-hero">
          <div>
              <h1 id="about">
                Information about you. Encrypted.
              </h1>
              Siluete helps you securely store information about you. Store personal data, advertisement preferences or a personality test results. All encrypted, all in the blockchain, all yours. 
              
          </div>
          <img className="Hero-image" src="hero.png" alt=""/>
        </div>

        <div className="App-body-right">
              <h1 id="share">
              Share your information and profit from it.
              </h1>
              <div>
              With siluete you can share exactly what you want and with whom you want. It can be a friend or an employee. Even other entities like recruiters or advertisers. And best of all, you can get third parties wanting to pay for it, opening to door to an information marketplace about you. Like what already happens without you being paid.
              </div>
        </div>

        <div className="App-body-right">
              <h1 id="control">
              You are in control 
              </h1>
              <div>
              With siluete you are in complete control of everything that happens with your information. Your information is stored your information in a permissionless and trustless infrastructure. It is up to you what to do with it.
              </div>
        </div>



        <footer className="App-footer">
          <p>siluete, inc</p>
          <p> Join the conversation on Discord</p>
          <img src="discord-icon.png" alt="https://discord.gg/RGWhERbk2B"></img>
        </footer>

      </body>
    </div>

  );
}

export default App;
