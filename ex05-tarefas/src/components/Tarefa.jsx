export function Tarefa({ tarefa, onUpdateClick, onDeleteClick }) {
  return (
    <li>
      {tarefa.descricao}
      <input
        type="checkbox"
        defaultChecked={tarefa.concluida}
        onClick={onUpdateClick}
      />
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
}
