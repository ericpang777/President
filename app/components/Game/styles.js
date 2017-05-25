import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  table: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 150,
    marginBottom: 0,
    paddingBottom: 0,
  },
  card: {
    flex: 1,
    height: 170,
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'contain'
  }
});

module.exports = styles
