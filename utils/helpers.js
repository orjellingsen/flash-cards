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
