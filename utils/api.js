import { AsyncStorage } from 'react-native'
const DECKS_KEY = 'FlashCards:decks'
const RESULTS_KEY = 'FlashCards:results'

export async function getDecks() {
  const result = await AsyncStorage.getItem(DECKS_KEY)
  return JSON.parse(result)
}

export async function addCardToDeck(title, card) {
  const data = await getDecks()
  await AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      ...data,
      [title]: {
        ...data[title],
        questions: data[title].questions.concat(card),
      },
    })
  )
  return card
}

export async function saveDeckTitle(title) {
  const deck = { [title]: { title, questions: [] } }
  await AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify(deck))
  return deck
}

export async function removeDeck(title) {
  const results = await getDecks()
  const { [title]: _, ...data } = results
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify(data))
}

/* Since I am using redux, I have opted not to use this function. I found it to be a better soulution to
  select the current deck from the list of decks returned from getDecks(). Since this function was mentioned
  in the project description, I am leaving it in to show that I have made it */
export async function getDeck(id) {
  const result = await getDecks()
  return result[id]
}
