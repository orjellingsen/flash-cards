import React, { Component } from 'react'
import { Content, Form, Item, Input, Label, H2 } from 'native-base'
import { saveDeckTitle } from '../utils/api'
import { redirect } from '../utils/helpers'
import SubmitButton from '../components/SubmitButton'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

const initialState = {
  title: '',
}

class NewDeck extends Component {
  state = initialState

  onSubmit = () => {
    const { dispatch, navigation } = this.props
    const { title } = this.state
    saveDeckTitle(title)
      .then(deck => dispatch(addDeck(deck)))
      .then(() => redirect(navigation)({ title, path: 'IndividualDeck' }))
    this.resetForm()
  }

  onChange = (key, value) => {
    this.setState(() => ({ [key]: value }))
  }

  resetForm = () => {
    this.setState(() => initialState)
  }

  render() {
    const { title } = this.state
    return (
      <Content padder>
        <H2>Create a new deck:</H2>
        <Form>
          <Item floatingLabel>
            <Label>Title</Label>
            <Input value={title} onChangeText={value => this.onChange('title', value)} />
          </Item>
          <SubmitButton info icon="add-circle" action={this.onSubmit}>
            Create
          </SubmitButton>
        </Form>
      </Content>
    )
  }
}

export default connect()(NewDeck)
