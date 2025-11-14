import "./App.css";
import bgImage from "./assets/DMC.jpg";
import capcomLogo from "./assets/capcom-logo.png";

export default function App() {
  return (
    <div className="landing" style={{ backgroundImage: `url(${bgImage})` }}>
      
      {/* MENU SUPERIOR */}
      <div className="navbar">
        <img src={capcomLogo} width="150" />

        <div className="nav-links">
          <a href="#">NEWS</a>
          <a href="#">GAME INFO</a>
          <a href="#">SYSTEM REQUIREMENTS</a>
        </div>

        <button
          className="buy-btn-top"
          onClick={() =>
            window.open(
              "https://store.steampowered.com/app/601150/Devil_May_Cry_5/",
              "_blank"
            )
          }
        >
          BUY NOW
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="main-content">
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/g_2VZvi0fQ0"
            title="DMC 5 Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* TEXTO INFERIOR */}
      <p className="bottom-text">
        The ultimate demon hunter is back in style, in the game action fans have been waiting for.
      </p>
    </div>
  );
}
