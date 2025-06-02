import Menu from "../objects/Menu.jsx";
import "../../css/index.css";

function Master() {
  return (
    <div className="master-page">
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <h1>Master Page</h1>
          <p>
            Benvenuto nella pagina del Master. <br />
            Da qui avrai accesso a tutta la conoscenza delle storie e delle
            nuove regole aggiunte al gioco.
          </p>
          <p>
            Per cambiare ruolo ed evitare spoiler, clicca pure{" "}
            <a href="/">qui</a> o su Home nel menu a sinistra.
          </p>
          <p>Per iniziare, seleziona un argomento dal menu a sinistra.</p>
          <p>
            Se hai bisogno di aiuto, puoi consultare le <a href="/help">FAQ</a>{" "}
            o contattare il supporto.
          </p>
          <p>Buon divertimento e buona avventura!</p>
        </div>
      </div>
    </div>
  );
}

export default Master;
