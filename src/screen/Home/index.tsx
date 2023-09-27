import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./style";
import { Participant } from "../../Componentes/Participant";

export default function Home() {
  const Participants = [
    "Lilvinicinho",
    "Totoro",
    "Romulo Silva",
    "Magalzão show",
    "Joey Ponzi",
    "Verdeto",
    "Deborah",
    "Leo Prado",
    "Glauquinho",
    "Yusuke Urameshi",
  ];

  function handleParticipantAdd() {
    if(Participants.includes("Verdeto")){
      Alert.alert("Participante já adicionado")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Você deseja realmente apagar o participante ${name}?`, 
    [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido com sucesso"),
      },

      {
        text: "Não",
        style: "cancel",
      }


    ]);
    
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
        />

        <TouchableOpacity style={styles.Touch} onPress={handleParticipantAdd}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
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
