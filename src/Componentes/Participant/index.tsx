import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type ParticipantProps = {
  name: string;
  onRemove: () => void
};

export function Participant({ name, onRemove }: ParticipantProps) {
{
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.Touch} onPress={onRemove}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
}
