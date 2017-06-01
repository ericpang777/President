import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  card: {
    flex: .4,
    height: 170,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    resizeMode:'contain'
  },
  buttonContainer: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  handContainer: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
});

module.exports = styles
