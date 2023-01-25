import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./style";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Clicou no botao de adicionar");
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
          onPress={(e) => console.log("clicou em adicionar")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
