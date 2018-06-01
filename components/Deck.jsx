import React from 'react'
import { CardItem, Left, Right, Icon, Text } from 'native-base'
import PropTypes from 'prop-types'
import { cardText } from '../utils/helpers'

const Deck = ({ navigate, path, title, questions }) => (
  <CardItem button onPress={() => navigate(path, title)}>
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

Deck.propTypes = {
  navigate: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf({}).isRequired,
}

export default Deck
