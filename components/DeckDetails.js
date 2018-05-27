import React from 'react'
import { CardItem, Body, Text } from 'native-base'
import { cardText } from '../utils/helpers'
import { styles } from '../views/styles'

export default function DeckInfo({ title, questions }) {
  return (
    <CardItem header>
      <Body style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.largeText}>{questions}</Text>
        <Text style={styles.smallText}>{cardText(questions)}</Text>
      </Body>
    </CardItem>
  )
}
