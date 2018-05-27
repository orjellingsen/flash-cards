import React from 'react'
import { CardItem, Left, Right, Icon, Text } from 'native-base'
import { cardText } from '../utils/helpers'

export default function Deck({ navigate, path, title, questions }) {
  return (
    <CardItem button={true} onPress={() => navigate(path, title)}>
      <Left>
        <Icon name="photos" />
        <Text style={{ alignSelf: 'center' }}>{title}</Text>
      </Left>
      <Right>
        <Text>
          {questions} {cardText(questions)}
        </Text>
      </Right>
    </CardItem>
  )
}
