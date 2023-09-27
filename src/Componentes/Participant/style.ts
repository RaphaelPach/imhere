import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 16,
  },

  Touch: {
    backgroundColor: "#e12c44",
    height: 56,
    width: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    color: "#FFF",
  },
});
