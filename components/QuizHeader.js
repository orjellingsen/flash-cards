import React from 'react'
import { CardItem, Left, Right, Text, H3 } from 'native-base'

const QuizHeader = ({ children, question, questionTotal }) => (
  <CardItem header>
    <Left>
      <H3>{children}</H3>
    </Left>
    <Right>
      <Text style={{ fontWeight: 'bold' }}>{questionTotal - question} remaining</Text>
    </Right>
  </CardItem>
)

export default QuizHeader
