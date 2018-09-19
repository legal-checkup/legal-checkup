import { rootReducer } from '.'

import { length, keysIn } from 'ramda'

import {
  INITIAL_STATE,
  QUESTION_SELECTED,
  questionSelected,
  PREVIOUS_QUESTION_REQUESTED,
  previousQuestion,
  NEXT_QUESTION_REQUESTED,
  nextQuestion
} from '..'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('defaults to the INITIAL_STATE', () => {
      expect(rootReducer(undefined, {})).toMatchObject(INITIAL_STATE)
    })

    it('handles an unknown action type by returning the state unchanged', () => {
      const state = 'state'
      expect(rootReducer(state, {})).toBe(state)
    })

    it(`updates the activeQuestion on a ${QUESTION_SELECTED} action`, () => {
      const activeQuestion = 2
      const expectedQuestion = 5
      const state = { activeQuestion }

      expect(
        rootReducer(state, questionSelected(expectedQuestion))
      ).toMatchObject({
        activeQuestion: expectedQuestion
      })
    })

    describe('action: PREVIOUS_QUESTION_SELECTED', () => {
      it(`updates the activeQuestion on a ${PREVIOUS_QUESTION_REQUESTED} action`, () => {
        const activeQuestion = 2
        const expectedQuestion = 1
        const state = { activeQuestion }

        expect(
          rootReducer(state, previousQuestion(expectedQuestion))
        ).toMatchObject({
          activeQuestion: expectedQuestion
        })
      })

      it(`sets the activeQuestion to previousQuestion when activeQuestion is > 1 on ${PREVIOUS_QUESTION_REQUESTED} action`, () => {
        const activeQuestion = 2
        const expectedQuestion = 1
        const state = { activeQuestion }

        expect(
          rootReducer(
            state.activeQuestion > 1,
            previousQuestion(expectedQuestion)
          )
        ).toBeTruthy()
      })
    })

    describe('action: NEXT_QUESTION_SELECTED', () => {
      it(`updates the activeQuestion on a ${NEXT_QUESTION_REQUESTED} action`, () => {
        const activeQuestion = 2
        const expectedQuestion = 3
        const state = { activeQuestion }

        expect(
          rootReducer(state, nextQuestion(expectedQuestion))
        ).toMatchObject({
          activeQuestion
        })
      })

      it(`activates the next button on a ${NEXT_QUESTION_REQUESTED} action on the condition: state.activeQuestion < total`, () => {
        const { questions } = INITIAL_STATE
        const total = length(keysIn(questions))
        const activeQuestion = 2
        const expectedQuestion = 3
        const state = { activeQuestion }

        expect(
          rootReducer(
            state.activeQuestion < total,
            nextQuestion(expectedQuestion)
          )
        ).toBeTruthy()
      })
    })
  })
})
