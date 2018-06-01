import React from 'react'
import { CardItem, Body, Text, H1 } from 'native-base'
import PropTypes from 'prop-types'
import { cardText } from '../utils/helpers'
import { styles } from './styles'

const DeckInfo = ({ deck: { title, questions } }) => {
  const cardAmount = questions.length
  return (
    <CardItem header>
      <Body padder style={styles.center}>
        <H1>{title}</H1>
        <Text style={styles.largeText}>{cardAmount}</Text>
        <Text style={styles.smallText}>{cardText(cardAmount)}</Text>
      </Body>
    </CardItem>
  )
}

DeckInfo.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf({}),
  }).isRequired,
}

export default DeckInfo
