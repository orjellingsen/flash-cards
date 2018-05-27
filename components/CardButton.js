import React from 'react'
import { CardItem, Body, Button, Text, Icon } from 'native-base'

export default function CardButton({ path, action, children, icon, ...rest }) {
  return (
    <CardItem>
      <Body>
        <Button
          block
          iconLeft
          onPress={() => action && action(path && path)}
          {...rest}
        >
          {icon && <Icon name={icon} />}
          <Text>{children}</Text>
        </Button>
      </Body>
    </CardItem>
  )
}
