import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { styles } from '../views/styles'

export default function SubmitButton({ children, icon, action, ...rest }) {
  return (
    <Button
      style={styles.button}
      iconLeft
      block
      onPress={() => action()}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      <Text>{children}</Text>
    </Button>
  )
}
