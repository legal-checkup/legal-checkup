// Actions
// These have been 'namespaced' to the Checkup part of the app
// We will eventually have many more actions (e.g., admin actions), so it will be nice
// to keep them all straight
// Note that these are easy to read and understand when you see them in the Redux DevTools
export const CHECKUP_COMPLETE = '@checkup/CHECKUP_COMPLETE'
export const ERROR_QUESTION_INDEX_OUT_OF_BOUNDS =
  '@checkup/ERROR_QUESTION_INDEX_OUT_OF_BOUNDS'
export const NEXT_QUESTION_ACTIVATED = '@checkup/NEXT_QUESTION_ACTIVATED'
export const NEXT_QUESTION_REQUESTED = '@checkup/NEXT_QUESTION_REQUESTED'
export const PREVIOUS_QUESTION_ACTIVATED =
  '@checkup/PREVIOUS_QUESTION_ACTIVATED'
export const PREVIOUS_QUESTION_REQUESTED =
  '@checkup/PREVIOUS_QUESTION_REQUESTED'
export const QUESTION_REQUESTED = '@checkup/QUESTION_REQUESTED'
export const REQUESTED_QUESTION_ACTIVATED =
  '@checkup/REQUESTED_QUESTION_ACTIVATED'
export const USER_RESPONDED_WITH_NO = '@checkup/USER_RESPONDED_WITH_NO'
export const USER_RESPONDED_WITH_NOT_SURE =
  '@checkup/USER_RESPONDED_WITH_NOT_SURE'
export const USER_RESPONDED_WITH_YES = '@checkup/USER_RESPONDED_WITH_YES'
export const QUESTION_SELECTED = '@checkup/QUESTION_SELECTED' // mine
// Response enumeration
export const NO = 'No'
export const NOT_SURE = 'Not sure'
export const YES = 'Yes'

// Page paths
// Always better to use constants for values used in more than one place in the code --
// It ensures that you don't have different values, which causes painful, hard to find bugs
export const HOME_PATH = '/'
export const CHECKUP_PATH = '/checkup'
export const PRIVACY_POLICY_PATH = '/privacy-policy'
export const RESULTS_PATH = '/results'
export const TERMS_OF_USE_PATH = '/terms-of-use'
