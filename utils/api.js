import { AsyncStorage } from 'react-native'
const DECK_KEY = 'FlashCards:decks'
/*
We'll use AsyncStorage to store our decks and flashcards. Redux is optional for this project.
Using AsyncStorage you'll manage an object whose shape is similar to this:
*/
export const deckStructure = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
}
/*
Notice each deck creates a new key on the object. Each deck has a title and a questions key.
title is the title for the specific deck and questions is an array of questions and answers for that deck.
*/

/*
To manage your AsyncStorage database, you'll want to create four different helper methods.

getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the
  list of questions for the deck with the associated title.
*/
export function getDecks() {
  return AsyncStorage.getItem(DECK_KEY).then(data => console.log(data) || data)
}

export function getDeck(id) {}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECK_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  )
}
export function addCardToDeck(title, card) {}

export function fetchCalendarResults() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(formatCalendarResults)
}

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  )
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
  })
}
