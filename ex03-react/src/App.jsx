import { useState } from "react";
// import "./App.css";
import { Cabecalho } from "./components/Cabecalho";

function App() {
  const [contador, setContador] = useState(0);
  const [incremento, setIncremento] = useState(1);

  function handleBtIncrementarClick() {
    setContador(contador + 1);
  }

  function handleBtIncrementarValorClick() {
    setContador(contador + incremento);
  }

  function handleBtLimparClick() {
    setContador(0);
  }

  function handleIncrementoChange(evt) {
    setIncremento(parseInt(evt.target.value));
  }

  return (
    <>
      <Cabecalho />
      <p>Quantidades de cliques: {contador}</p>
      <button onClick={handleBtIncrementarClick}>Incrementar</button>
      <button onClick={handleBtLimparClick}>Limpar</button>
      <input
        type="number"
        value={incremento}
        onChange={handleIncrementoChange}
      />
      <button onClick={handleBtIncrementarValorClick}>Incrementar Valor</button>
    </>
  );
}

export default App;
