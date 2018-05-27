import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK } from '../actions/actionTypes'

function decks(state = {}, action) {
  const { decks, deck, title, card } = action
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...deck,
      }
    case ADD_CARD:
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat(card),
        },
      }
    case DELETE_DECK:
      const { [title]: _, ...newState } = state
      return newState
    default:
      return state
  }
}

export default decks
