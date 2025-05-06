import { Button, Switch, Text, View } from "react-native";

export function Tarefa({ tarefa, onUpdateClick, onDeleteClick }) {
  return (
    <View>
      <Text>{tarefa.descricao} </Text>
      <Switch value={tarefa.concluida} onValueChange={onUpdateClick} />
      <Button onPress={onDeleteClick} title="X" />
    </View>
  );
}
