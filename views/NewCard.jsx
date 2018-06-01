import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Content, Form, Item, Input, Label } from 'native-base'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'
import SubmitButton from '../components/SubmitButton'
import { addCard } from '../actions'
import { redirect } from '../utils/helpers'

class NewCard extends Component {
  static propTypes = {
    navigation: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

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
