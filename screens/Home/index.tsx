import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";
import { styles } from "./style";

export default function Home() {
  const [participants, setParticipants] = useState(["Amanda"]);

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante existe",
        "Participante registrado na lista"
      );
    }

    setParticipants((prevState) => [...prevState, "Ana"]);
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "sim",
        onPress: () => Alert.alert("Removido"),
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Nome do participante"}
          placeholderTextColor={"#6B6B6B"}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd()}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item.indexOf(item)}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nao ha ninguem adicionado a lista ainda
          </Text>
        )}
      />
    </View>
  );
}
