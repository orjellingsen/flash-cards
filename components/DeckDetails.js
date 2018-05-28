import React from 'react'
import { CardItem, Body, Text, H1 } from 'native-base'
import { cardText } from '../utils/helpers'
import { styles } from './styles'

const DeckInfo = ({ deck: { title, questions } }) => {
  const cardAmount = questions.length
  return (
    <CardItem header>
      <Body padder style={{ alignItems: 'center' }}>
        <H1>{title}</H1>
        <Text style={styles.largeText}>{cardAmount}</Text>
        <Text style={styles.smallText}>{cardText(cardAmount)}</Text>
      </Body>
    </CardItem>
  )
}

export default DeckInfo
