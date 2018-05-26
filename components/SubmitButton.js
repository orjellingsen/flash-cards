import React from 'react'
import { Button, Icon, Text } from 'native-base'
import { styles } from '../views/styles'

export default function SubmitButton({ children, icon, action }) {
  return (
    <Button style={styles.button} iconLeft block light onPress={() => action()}>
      {icon && <Icon name={icon} />}
      <Text>{children}</Text>
    </Button>
  )
}
