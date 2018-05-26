import React from 'react'
import { CardItem, Body, Text } from 'native-base'

export default function DeckInfo({ title, questions }) {
  return (
    <CardItem header>
      <Body>
        <Text>{title}</Text>
        <Text>{questions}</Text>
      </Body>
    </CardItem>
  )
}
