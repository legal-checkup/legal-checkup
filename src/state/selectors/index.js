export function getActiveQuestion ({ activeQuestion }) {
  return activeQuestion
}

export function getCount ({ count }) {
  return count
}

export function getTestCount ({ rootReducer: { count } = {} }) {
  return count
}
