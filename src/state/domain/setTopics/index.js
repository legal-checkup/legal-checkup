import { view, lensPath, reduce, isEmpty, not, reverse } from 'ramda'

const getEdges = r =>
  view(lensPath(['questions', 'allGoogleSheetQuestionsRow', 'edges']), r)

export default function setTopics (result) {
  return reduce(
    (acc, { node: item }) => {
      const {
        id,
        topic,
        questiontext,
        helptext,
        resultstext,
        resourcelink
      } = item

      if (isEmpty(acc)) {
        return [
          {
            id: Math.random(),
            name: topic,
            questions: [
              {
                id,
                body: questiontext,
                help: helptext,
                results: resultstext,
                url: resourcelink
              }
            ]
          }
        ]
      } else if (not(isEmpty(acc))) {
        const rev = reverse(acc)
        const [x, ...xs] = rev
        const arr = reverse(xs)

        const { name, questions } = x

        if (name === topic) {
          return [
            ...arr,
            {
              id: Math.random(),
              name: topic,
              questions: [
                ...questions,
                {
                  id,
                  body: questiontext,
                  help: helptext,
                  results: resultstext,
                  url: resourcelink
                }
              ]
            }
          ]
        } else if (name !== topic) {
          return [
            ...acc,
            {
              id: Math.random(),
              name: topic,
              questions: [
                {
                  id,
                  body: questiontext,
                  help: helptext,
                  results: resultstext,
                  url: resourcelink
                }
              ]
            }
          ]
        }
      }

      return acc
    },
    [],
    getEdges(result)
  )
}
