import { AsyncStorage } from 'react-native'
const DECK_KEY = 'FlashCards:decks4'

const initialData = {
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

export function initializeApp() {}

export function getDecks() {
  return AsyncStorage.getItem(DECK_KEY).then(data => (data ? JSON.parse(data) : initialData))
}

/* Since I am using redux, I have opted not to use this function. I found it to be a better soulution to
  select the current deck from the list of decks returned from getDecks(). Since this function was mentioned
  in the project description, I am leaving it in to show that I have made it */
export function getDeck(id) {
  return AsyncStorage.getItem(DECK_KEY)
    .then(data => JSON.parse(data))
    .then(data => data[id])
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_KEY).then(decks => {
    const data = JSON.parse(decks)
    AsyncStorage.mergeItem(
      DECK_KEY,
      JSON.stringify({
        ...data,
        [title]: {
          ...data[title],
          questions: data[title].questions.concat(card),
        },
      })
    )
    return card
  })
}

export function saveDeckTitle(title) {
  const deck = {
    title,
    questions: [],
  }
  return AsyncStorage.mergeItem(
    DECK_KEY,
    JSON.stringify({
      [title]: deck,
    })
  ).then(_ => ({ [title]: deck }))
}

export function removeDeck(title) {
  return AsyncStorage.getItem(DECK_KEY).then(decks => {
    const { [title]: _, ...data } = JSON.parse(decks)
    AsyncStorage.setItem(DECK_KEY, JSON.stringify(data))
  })
}
