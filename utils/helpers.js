export function cardText(amount) {
  return `card${amount !== 1 ? 's' : ''}`
}

export function calcPercent(part, total) {
  return Math.round(part / total * 100)
}

export function redirect(navigation) {
  return function({ path, title }) {
    navigation.navigate(path, { title })
  }
}

// Quotes found in this article https://www.daniel-wong.com/2015/10/05/study-motivation-quotes/
const quotes = [
  'There is no substitute for hard work.',
  'Push yourself, because no one else is going to do it for you.',
  'Some people dream of accomplishing great things. Others stay awake and make it happen.',
  'Push yourself, because no one else is going to do it for you.',
  'There are no shortcuts to any place worth going',
  'If people only knew how hard I’ve worked to gain my mastery, it wouldn’t seem so wonderful at all.',
  'You don’t always get what you wish for; you get what you work for.',
]

export function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber]
}
