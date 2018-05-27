import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from './actionTypes'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addCard(card, title) {
  return {
    type: ADD_CARD,
    card,
    title,
  }
}
