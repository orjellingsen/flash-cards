import React, { Component } from 'react'
import { View } from 'react-native'
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from 'native-base'

import { NavigationActions } from 'react-navigation'

import { saveDeckTitle } from '../utils/api'
import { styles } from './styles'

class NewDeck extends Component {
  state = {
    title: '',
  }

  onSubmit = () => {
    const { title } = this.state
    saveDeckTitle(title)
    this.toHome()
  }

  onChange = title => {
    this.setState(() => ({ title }))
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: 'NewDeck',
      })
    )
  }

  render() {
    const { title } = this.state
    return (
      <Content style={styles.content}>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input value={title} onChangeText={title => this.onChange(title)} />
          </Item>
          <Button
            style={styles.button}
            iconLeft
            block
            light
            onPress={this.onSubmit}
          >
            <Icon name="add" />
            <Text>Create Deck</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}

export default NewDeck
