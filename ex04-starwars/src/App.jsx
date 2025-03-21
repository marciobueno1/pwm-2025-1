import { useState } from "react";
import { Cabecalho } from "./components/Cabecalho";

const urlStarWars = "https://swapi.dev/api/people/?page=1";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  async function carregar(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPersonagens(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      } else {
        console.log("response status", response.status);
        console.log("response status text", response.statusText);
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }

  function handleBtCarregarClick() {
    carregar(urlStarWars);
  }

  function handleBtPreviousClick() {
    carregar(previous);
  }

  function handleBtNextClick() {
    carregar(next);
  }

  return (
    <>
      <Cabecalho />
      <button onClick={handleBtPreviousClick} disabled={previous == null}>
        Anterior
      </button>
      <button onClick={handleBtCarregarClick}>Carregar</button>
      <button onClick={handleBtNextClick} disabled={next == null}>
        Próxima
      </button>
      <ol>
        {personagens.map((personagem) => (
          <li key={personagem.url}>
            {personagem.name} ({personagem.birth_year})
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
