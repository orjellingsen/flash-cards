import React from 'react'
import { CardItem, Body, Text } from 'native-base'
import { styles } from '../views/styles'

export default function QuizContent({ children }) {
  return (
    <CardItem>
      <Body>
        <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 18 }}>
          {children}
        </Text>
      </Body>
    </CardItem>
  )
}
