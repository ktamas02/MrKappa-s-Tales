import "../../css/RoleSelector.css";
import { useNavigate } from "react-router-dom";

function RoleSelector() {
  const navigate = useNavigate();
  return (
    <div className="role-selector">
      <h2 className="role-title">Seleziona il tuo ruolo:</h2>
      <div className="role-options">
        <button className="role-button" onClick={() => navigate("master")}>
          Master
        </button>
        <button
          className="role-button"
          onClick={() => navigate("avventuriero")}
        >
          Avventuriero
        </button>
      </div>
      <p className="role-description">
        Se selezioni un ruolo, potrai accedere a funzionalità specifiche per
        quel ruolo.
      </p>
    </div>
  );
}

export default RoleSelector;
