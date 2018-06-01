import React from 'react'
import PropTypes from 'prop-types'
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

CardButton.propTypes = {
  actionValue: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
}

CardButton.defaultProps = {
  actionValue: null,
  action: null,
  icon: null,
}

export default CardButton
