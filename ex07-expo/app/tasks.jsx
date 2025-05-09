import React, { useEffect, useState } from "react";
import { addTarefa, deleteTarefa, getTarefas, updateTarefa } from "@/api";
import { Tarefa } from "@/components/Tarefa";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Tasks() {
  const [descricao, setDescricao] = useState("");

  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ["tarefas"],
    queryFn: getTarefas,
  });
  const addMutation = useMutation({
    mutationFn: addTarefa,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tarefas"],
      });
      setDescricao("");
    },
  });

  console.log("isPending", isPending);
  console.log("error", error);
  console.log("data", data);
  console.log("----------------------------------------------------------");

  async function adicionarTarefa() {
    if (!descricao.trim()) {
      alert("Preencha o campo descrição");
      return;
    }

    addMutation.mutate({ descricao, concluida: false });
  }

  const handleOnUpdateClick = async (tarefa) => {
    tarefa.concluida = !tarefa.concluida;
    const tarefaAtualizada = await updateTarefa(tarefa);
    console.log("tarefaAtualizada", tarefaAtualizada);
    if (tarefaAtualizada) {
      // carregarTarefas();
    }
  };

  const handleOnDeleteClick = async (tarefa) => {
    const tarefaRemovida = await deleteTarefa(tarefa);
    console.log("tarefaRemovida", tarefaRemovida);
    if (tarefaRemovida) {
      // carregarTarefas();
    } else {
      alert("Não pode remover a tarefa");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Digite a descrição na nova tarefa"
        />
        <Button onPress={adicionarTarefa} title="Adicionar" />
      </View>
      {!!error && <Text>Erro: {error.message}</Text>}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Tarefa
            tarefa={item}
            onUpdateClick={() => handleOnUpdateClick(item)}
            onDeleteClick={() => handleOnDeleteClick(item)}
          />
        )}
        keyExtractor={(item) => item.objectId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
  },
});
