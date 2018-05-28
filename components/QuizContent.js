import React from 'react'
import { CardItem, Body, Text } from 'native-base'

const QuizContent = ({ children }) => (
  <CardItem>
    <Body>
      <Text>{children}</Text>
    </Body>
  </CardItem>
)

export default QuizContent
