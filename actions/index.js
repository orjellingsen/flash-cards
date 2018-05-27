import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK } from './actionTypes'

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

export function deleteDeck(title) {
  return {
    type: DELETE_DECK,
    title,
  }
}
