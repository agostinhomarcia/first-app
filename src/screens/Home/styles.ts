import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000009",
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    fontSize: 16,
    color: "#f9d7ff",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginLeft: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#39fc03",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
});
