import { Text, View, StyleSheet } from "react-native";

export default function App(){
  return(
    <View style={{
      backgroundColor: "#131016",
      flex: 1,
      padding: 24
    }}>
      <Text style={{
        color: "#fdfcfe",
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
        }}>
          Nome do evento
      </Text>

      <Text style={{
        color: '#6B6B6B',
        fontSize: 16
      }}>
        Quarta, 18 de Janeiro de 2023.
      </Text>
    </View>
  );
}

const style = StyleSheet.create({

});