import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  function handleParticipantAdd() {
    alert("Adicionar Participante");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 15 de Setembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
    </View>
  );
}
