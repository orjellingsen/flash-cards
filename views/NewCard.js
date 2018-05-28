import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Form, Item, Input, Label } from 'native-base'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../utils/api'
import { styles } from './styles'
import SubmitButton from '../components/SubmitButton'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  onSubmit = () => {
    const { title } = this.props.navigation.state.params
    addCardToDeck(title, { ...this.state }).then(card => this.props.dispatch(addCard(card, title)))
    this.toHome(title)
  }

  onChange = (value, key) => {
    this.setState(() => ({ [key]: value }))
  }

  toHome = title => {
    const { navigation } = this.props
    navigation.navigate('IndividualDeck', {
      title,
    })
  }

  render() {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params
    return (
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Question</Label>
            <Input value={question} onChangeText={value => this.onChange(value, 'question')} />
          </Item>
          <Item floatingLabel>
            <Label>Answer</Label>
            <Input value={answer} onChangeText={value => this.onChange(value, 'answer')} />
          </Item>
          <SubmitButton info icon="add-circle" action={this.onSubmit}>
            Add Card
          </SubmitButton>
        </Form>
      </Content>
    )
  }
}

export default connect()(NewCard)
