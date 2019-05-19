import styled from 'styled-components'
import { PROGRESS_BAR_DIVIDER } from '../../../../../constants'

const TopicQuestions = styled.div`
  display: inline-block;
  position: relative;
  &:not(:last-child) {
    border-right: 1px solid ${PROGRESS_BAR_DIVIDER};
  }
`

TopicQuestions.displayName = 'StyledTopicQuestions'

export default TopicQuestions
