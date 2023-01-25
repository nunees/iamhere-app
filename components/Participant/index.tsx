import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Exemplo participante</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={(e) => console.log("clicou em adicionar")}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
