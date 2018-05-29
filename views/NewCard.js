import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Form, Item, Input, Label } from 'native-base'
import { addCardToDeck } from '../utils/api'
import SubmitButton from '../components/SubmitButton'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { redirect } from '../utils/helpers'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  onSubmit = () => {
    const { navigation, dispatch } = this.props
    const { title } = navigation.state.params
    addCardToDeck(title, { ...this.state }).then(card => dispatch(addCard(card, title)))
    redirect(navigation)({ title, path: 'IndividualDeck' })
  }

  onChange = (key, value) => {
    this.setState(() => ({ [key]: value }))
  }

  render() {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params
    return (
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Question</Label>
            <Input value={question} onChangeText={value => this.onChange('question', value)} />
          </Item>
          <Item floatingLabel>
            <Label>Answer</Label>
            <Input value={answer} onChangeText={value => this.onChange('answer', value)} />
          </Item>
          <SubmitButton info icon="add-circle" action={this.onSubmit}>
            Create New Card
          </SubmitButton>
        </Form>
      </Content>
    )
  }
}

export default connect()(NewCard)
