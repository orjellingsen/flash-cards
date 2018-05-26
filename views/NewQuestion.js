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
import { addCardToDeck } from '../utils/api'
import { styles } from './styles'

class NewDeck extends Component {
  state = {
    question: '',
    answer: '',
  }

  onSubmit = () => {
    const { title } = this.props.navigation.state.params
    addCardToDeck(title, { ...this.state })
    this.toHome()
  }

  onChange = (value, key) => {
    this.setState(() => ({ [key]: value }))
  }

  toHome = () => {
    this.props.navigation.dispatch(
      NavigationActions.back({
        key: 'NewQuestion',
      })
    )
  }

  render() {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params
    return (
      <Content style={styles.content}>
        <Form>
          <Item floatingLabel>
            <Label>Question</Label>
            <Input
              value={question}
              onChangeText={value => this.onChange(value, 'question')}
            />
          </Item>
          <Item floatingLabel>
            <Label>Answer</Label>
            <Input
              value={answer}
              onChangeText={value => this.onChange(value, 'answer')}
            />
          </Item>
          <Button
            style={styles.button}
            iconLeft
            block
            light
            onPress={this.onSubmit}
          >
            <Icon name="add" />
            <Text>Add Question</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}

export default NewDeck
