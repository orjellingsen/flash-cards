import React from 'react'
import { CardItem, Body, Button, Text } from 'native-base'

export default function CardButton({ path, navigate, children }) {
  return (
    <CardItem>
      <Body>
        <Button light full onPress={() => navigate(path)}>
          <Text>{children}</Text>
        </Button>
      </Body>
    </CardItem>
  )
}
