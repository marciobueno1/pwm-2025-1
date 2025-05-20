import axios from "axios";

const urlTarefa = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "TqPX0HAUUB9cQHxXfEf5MxvVXCPNd7ZT1ZrAalFl",
  "X-Parse-JavaScript-Key": "4baJyrMFzvH8CSg5Q6yA5OBKbibjoJUxdGCSEGTm",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getTarefas() {
  const response = await axios.get(urlTarefa, { headers: headers });
  return response.data.results;
}

export async function addTarefa(novaTarefa) {
  return axios.post(urlTarefa, novaTarefa, {
    headers: headersJson,
  });
}

export async function updateTarefa(tarefaAtualizada) {
  return axios.put(
    `${urlTarefa}/${tarefaAtualizada.objectId}`,
    tarefaAtualizada,
    {
      headers: headersJson,
    }
  );
}

// usando a notação arrow function
// usando a forma compacta quando o único comando é apenas um return
export const deleteTarefa = (tarefa) =>
  axios.delete(`${urlTarefa}/${tarefa.objectId}`, {
    headers: headers,
  });
