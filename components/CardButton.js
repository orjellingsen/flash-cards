import React from 'react'
import { CardItem, Body, Button, Text } from 'native-base'

export default function CardButton({ path, navigate, primary, children }) {
  return (
    <CardItem>
      <Body>
        <Button
          primary={!!primary}
          light={!primary}
          full
          onPress={() => navigate(path)}
        >
          <Text>{children}</Text>
        </Button>
      </Body>
    </CardItem>
  )
}
