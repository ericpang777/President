import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    flexDirection: 'row'
  },
  table: {
    textAlign: 'center',
    marginBottom: 0,
    paddingBottom: 0,
  },
  card: {
    flex: 1,
    height: 170,
    width: 80,
    resizeMode: 'contain'
  }
});

module.exports = styles
