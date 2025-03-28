import { useEffect, useState } from "react";
import { Cabecalho } from "./components/Cabecalho";
import { addTarefa, deleteTarefa, getTarefas, updateTarefa } from "./api";
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

  const handleOnUpdateClick = async (tarefa) => {
    tarefa.concluida = !tarefa.concluida;
    const tarefaAtualizada = await updateTarefa(tarefa);
    console.log("tarefaAtualizada", tarefaAtualizada);
    if (tarefaAtualizada) {
      carregarTarefas();
    }
  };

  const handleOnDeleteClick = async (tarefa) => {
    const tarefaRemovida = await deleteTarefa(tarefa);
    console.log("tarefaRemovida", tarefaRemovida);
    if (tarefaRemovida) {
      carregarTarefas();
    } else {
      alert("Não pode remover a tarefa");
    }
  };

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
          <Tarefa
            key={tarefa.objectId}
            tarefa={tarefa}
            onUpdateClick={() => handleOnUpdateClick(tarefa)}
            onDeleteClick={() => handleOnDeleteClick(tarefa)}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
