import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  handContainer: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  card: {
    flex: 1,
    height: 170,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',

  }
});

module.exports = styles
