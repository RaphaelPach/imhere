import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import { Participant } from "../../Componentes/Participant";

export default function Home() {
const [Participants, setParticipants] = useState<string[]>([]);
const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if (Participants.includes(newParticipant)) {
      Alert.alert("Participante já adicionado");
    }
     setParticipants([...Participants, newParticipant]);
     setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover",
      `Você deseja realmente apagar o participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert("Participante removido com sucesso"),
        },

        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Terça, 26 de Setembro, 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Evento"
          placeholderTextColor={"#555"}
          onChangeText={e => setNewParticipant(e)}
          value={newParticipant}
        />

        <TouchableOpacity style={styles.Touch} onPress={handleParticipantAdd}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>Ninguém chegou ainda, meu chapa!</Text>
        )}
        data={Participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}
