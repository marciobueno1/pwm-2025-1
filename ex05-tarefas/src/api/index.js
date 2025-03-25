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
      console.log("status:", response.status);
      console.log("statusText:", response.statusText);
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
      console.log("status:", response.status);
      console.log("statusText:", response.statusText);
    }
  } catch (err) {
    console.log("addTarefas err:", err);
  }
  return null;
}
