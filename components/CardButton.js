import React from 'react'
import { CardItem, Body, Button, Text, Icon } from 'native-base'

const CardButton = ({ actionValue, action, children, icon, ...rest }) => (
  <CardItem>
    <Body>
      <Button block iconLeft onPress={() => action && action(actionValue && actionValue)} {...rest}>
        {icon && <Icon name={icon} />}
        <Text>{children}</Text>
      </Button>
    </Body>
  </CardItem>
)

export default CardButton
