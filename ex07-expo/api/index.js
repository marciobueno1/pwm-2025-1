import axios from "axios";

const urlTarefa = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "TqPX0HAUUB9cQHxXfEf5MxvVXCPNd7ZT1ZrAalFl",
  "X-Parse-REST-API-Key": "gDdNMhyHIiQXPHdY1oYD2HN2zRABOnKCqpoXlYJZ",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getTarefas() {
  try {
    const response = await axios.get(urlTarefa, { headers: headers });
    if (response.status / 100 === 2) {
      console.log("tarefas", response.data.results);
      return response.data.results;
    } else {
      console.log("getTarefas status:", response.status);
      console.log("getTarefas statusText:", response.statusText);
    }
  } catch (err) {
    console.log("getTarefas err:", err);
  }
  return [];
}

export async function addTarefa(novaTarefa) {
  try {
    const response = await axios.post(urlTarefa, novaTarefa, {
      headers: headersJson,
    });
    if (response.status === 201) {
      return { ...novaTarefa, ...response.data };
    } else {
      console.log("addTarefa status:", response.status);
      console.log("addTarefa statusText:", response.statusText);
    }
  } catch (err) {
    console.log("addTarefa err:", err);
  }
  return null;
}

export async function updateTarefa(tarefaAtualizada) {
  delete tarefaAtualizada.createdAt;
  delete tarefaAtualizada.updatedAt;
  try {
    const response = await axios.put(
      //urlTarefa + "/" + tarefaAtualizada.objectId,
      `${urlTarefa}/${tarefaAtualizada.objectId}`,
      tarefaAtualizada,
      {
        headers: headersJson,
      }
    );
    if (response.status === 200) {
      return { ...tarefaAtualizada, ...response.data };
    } else {
      console.log("updateTarefa status:", response.status);
      console.log("updateTarefa statusText:", response.statusText);
    }
  } catch (err) {
    console.log("updateTarefa err:", err);
  }
  return null;
}

export async function deleteTarefa(tarefa) {
  try {
    const response = await axios.delete(`${urlTarefa}/${tarefa.objectId}`, {
      headers: headers,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      console.log("deleteTarefa status:", response.status);
      console.log("deleteTarefa statusText:", response.statusText);
    }
  } catch (err) {
    console.log("deleteTarefa err:", err);
  }
  return null;
}
