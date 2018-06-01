import React from 'react'
import { Button, Icon, Text } from 'native-base'
import PropTypes from 'prop-types'
import { styles } from './styles'

const SubmitButton = ({ children, icon, action, ...rest }) => (
  <Button style={styles.button} iconLeft block onPress={() => action()} {...rest}>
    {icon && <Icon name={icon} />}
    <Text>{children}</Text>
  </Button>
)

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  action: PropTypes.func.isRequired,
}

SubmitButton.defaultProps = {
  icon: null,
}

export default SubmitButton
