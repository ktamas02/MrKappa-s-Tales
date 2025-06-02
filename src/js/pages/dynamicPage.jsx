import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/Pages.css";

function DynamicPage() {
  const { nome } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const page = nome || "home";
    fetch(`/MrKappa-s-Tales/pages/${page}.txt`)
      .then((res) => (res.ok ? res.text() : "Pagina non trovata"))
      .then(setContent)
      .catch(() => setContent("Errore nel caricamento della pagina."));
  }, [nome]);

  return (
    <div className="content">
      <button onClick={() => navigate(-1)} className="back-button">
        Torna indietro
      </button>
      <pre>{content}</pre>
      <button onClick={() => navigate(-1)} className="back-button">
        Torna indietro
      </button>
    </div>
  );
}

export default DynamicPage;
