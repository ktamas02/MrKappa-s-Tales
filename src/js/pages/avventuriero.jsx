import "../../css/Pages.css";
import Menu from "../objects/Menu.jsx";

function Avventuriero() {
  return (
    <div className="avventuriero-page">
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <h1>Avventuriero Page</h1>
          <p>
            Benvenuto nella pagina dell'Avventuriero. <br />
          </p>
          <p>
            Per cambiare ruolo, clicca pure <a href="/">qui</a> o su Home nel
            menu a sinistra.
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

export default Avventuriero;
