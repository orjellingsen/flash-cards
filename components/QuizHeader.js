import React from 'react'
import { CardItem, Left, Right, Text } from 'native-base'
import { styles } from '../views/styles'

export default function QuizHeader({ children, question, questionTotal }) {
  return (
    <CardItem header>
      <Left>
        <Text style={styles.header}>{children}</Text>
      </Left>
      <Right>
        <Text>
          {question}/{questionTotal}
        </Text>
      </Right>
    </CardItem>
  )
}
