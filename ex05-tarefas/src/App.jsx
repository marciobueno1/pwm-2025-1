import { useEffect, useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { addTarefa, getTarefas } from "./api";
import { Tarefa } from "./components/Tarefa";
// import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [descricao, setDescricao] = useState("");

  async function carregarTarefas() {
    const tarefasTemp = await getTarefas();
    setTarefas(tarefasTemp);
  }

  async function adicionarTarefa() {
    if (!descricao.trim()) {
      alert("Preencha o campo descrição");
      return;
    }

    const novaTarefa = await addTarefa({ descricao, concluida: false });
    if (novaTarefa != null) {
      console.log("novaTarefa", novaTarefa);
      setDescricao("");
      await carregarTarefas();
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <>
      <Cabecalho />
      <p>
        <input
          value={descricao}
          onChange={(evt) => setDescricao(evt.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </p>
      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa key={tarefa.objectId} tarefa={tarefa} />
        ))}
      </ul>
    </>
  );
}

export default App;
