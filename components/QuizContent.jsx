import React from 'react'
import PropTypes from 'prop-types'
import { CardItem, Body, Text } from 'native-base'

const QuizContent = ({ children }) => (
  <CardItem>
    <Body>
      <Text>{children}</Text>
    </Body>
  </CardItem>
)

QuizContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default QuizContent
