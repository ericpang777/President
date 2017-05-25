import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    flexDirection: 'row'
  },
  table: {
    textAlign: 'center',
    flexDirection: 'column',
    marginBottom: 0,
    paddingBottom: 0,
  },
  card: {
    flex: 1,
    height: 85,
    width: 40,
    resizeMode: 'contain'
  }
});

module.exports = styles
