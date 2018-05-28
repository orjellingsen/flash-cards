import React from 'react'
import { CardItem, Body, Text, H1 } from 'native-base'
import { cardText } from '../utils/helpers'
import { styles } from '../views/styles'

export default function DeckInfo({ deck: { title, questions } }) {
  const cardAmount = questions.length
  return (
    <CardItem header>
      <Body style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
        <H1>{title}</H1>
        <Text style={styles.largeText}>{cardAmount}</Text>
        <Text style={styles.smallText}>{cardText(cardAmount)}</Text>
      </Body>
    </CardItem>
  )
}
