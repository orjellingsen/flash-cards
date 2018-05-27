import React from 'react'
import { CardItem, Body, Button, Text, Icon } from 'native-base'

export default function CardButton({
  actionValue,
  action,
  children,
  icon,
  ...rest
}) {
  return (
    <CardItem>
      <Body>
        <Button
          block
          iconLeft
          onPress={() => action && action(actionValue && actionValue)}
          {...rest}
        >
          {icon && <Icon name={icon} />}
          <Text>{children}</Text>
        </Button>
      </Body>
    </CardItem>
  )
}
