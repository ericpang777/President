import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#27ae60",
    borderWidth: 10,
    borderRadius: 20,
    borderColor: "#ecf0f1",
    padding: 5,
    flex: 1,
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ecf0f1"
  }
});

module.exports = styles
