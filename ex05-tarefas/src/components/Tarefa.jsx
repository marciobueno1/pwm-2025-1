export function Tarefa({ tarefa }) {
  return (
    <li>
      {tarefa.descricao} ({tarefa.concluida ? "concluída" : "a ser feita"})
    </li>
  );
}
