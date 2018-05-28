import React from 'react'
import { CardItem, Left, Right, Icon, Text } from 'native-base'
import { cardText } from '../utils/helpers'
import { primaryColor } from '../utils/colors'

export default function Deck({ navigate, path, title, questions }) {
  return (
    <CardItem button={true} onPress={() => navigate(path, title)}>
      <Left>
        <Icon style={{ color: primaryColor }} name="photos" />
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
