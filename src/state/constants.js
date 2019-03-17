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
export const REDO_CHECKUP_CLICKED = '@checkup/REDO_CHECKUP_CLICKED'
export const QUESTIONS_LOADED = '@checkup/QUESTIONS_LOADED'

// Response enumeration
export const NO = 'No'
export const NOT_SURE = 'Not sure'
export const YES = 'Yes'

// Keyboard characters
export const KEYS = {
  A: 'A',
  B: 'B',
  esc: 'esc',
  left: 'left',
  right: 'right'
}

// Results
export const RESULTS_TRIGGER = 1
export const ALL_GOOD_RESULT = 'ALL_GOOD_RESULT'
export const NEED_HELP_RESULT = 'NEED_HELP_RESULT'

// Page paths
// Always better to use constants for values used in more than one place in the code --
// It ensures that you don't have different values, which causes painful, hard to find bugs
export const ABOUT_PATH = '/about'
export const CHECKUP_PATH = '/checkup'
export const HELP_PATH = '/help'
export const HOME_PATH = '/'
export const PRIVACY_POLICY_PATH = '/privacy-policy'
export const RESULTS_PATH = '/results'
export const TERMS_OF_USE_PATH = '/terms-of-use'

// External URLs
export const COMMUNITY_LAW_URL = 'http://communitylaw.org.nz/'
export const ABOUT_COMMUNITY_LAW_URL = 'http://www.wclc.org.nz/about-us/'
export const COMMUNITY_LAW_SERVICES_URL = 'http://www.wclc.org.nz/our-services/'

// Keycode

export const KEY_CODES = {
  A: 65,
  B: 66,
  esc: 27,
  left: 37,
  right: 39
}
