import { StyleSheet } from 'react-native'
import { gray } from '../../utils/colors'

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 5,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    fontSize: 35,
    textAlign: 'center',
  },
  quote: {
    padding: 20,
    alignContent: 'center',
    fontSize: 16,
    color: gray,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 12,
    color: gray,
    textAlign: 'center',
  },
})

export default styles
