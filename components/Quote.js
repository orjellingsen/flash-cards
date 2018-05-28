import React from 'react'
import { Text } from 'native-base'
import { styles } from './styles'
import { getRandomQuote } from '../utils/helpers'

const Quote = () => <Text style={styles.quote}>"{getRandomQuote()}"</Text>
export default Quote
