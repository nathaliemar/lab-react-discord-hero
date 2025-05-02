import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={discordLogo} alt="logo" />
        <img src={menuIcon} alt="menu" />
      </nav>
      <div className="hero-text">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just a handful of friends can spend
          time together. A place that makes it easy to talk every day and hang
          out more often.
        </p>
      </div>
      <div className="btn-container">
        <button className="btn" id="white-btn">
          Download for Mac
        </button>
        <button className="btn" id="black-btn">
          Open Discord in your browser
        </button>
      </div>
      <img className="background" src={background} alt="hero-image" />
    </div>
  );
}

export default App;
