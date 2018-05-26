import { AsyncStorage } from 'react-native'
const DECK_KEY = 'FlashCards:decks2'

/*
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the
  list of questions for the deck with the associated title.
*/
export function getDecks() {
  return AsyncStorage.getItem(DECK_KEY).then(data => JSON.parse(data))
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_KEY)
    .then(data => JSON.parse(data))
    .then(data => data[id])
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_KEY)
    .then(data => JSON.parse(data))
    .then(data =>
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
    )
}

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
