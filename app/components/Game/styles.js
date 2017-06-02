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
    flex: .8,
    height: 170,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    resizeMode:'contain'
  },
  buttonContainer: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    top:30
  },
  handContainer: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    top:30
  },
});

module.exports = styles
