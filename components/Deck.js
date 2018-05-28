import React from 'react'
import { CardItem, Left, Right, Icon, Text } from 'native-base'
import { cardText } from '../utils/helpers'

const Deck = ({ navigate, path, title, questions }) => (
  <CardItem button={true} onPress={() => navigate(path, title)}>
    <Left>
      <Icon name="photos" />
      <Text>{title}</Text>
    </Left>
    <Right>
      <Text>
        {questions} {cardText(questions)}
      </Text>
    </Right>
  </CardItem>
)

export default Deck
