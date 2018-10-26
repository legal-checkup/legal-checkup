import styled from 'styled-components'

const TopicQuestions = styled.div`
  font-weight: ${({ activeTopic }) => (activeTopic ? 'bold' : 'normal')};

  background-color: #fff;
  display: inline-block;
`

TopicQuestions.displayName = 'StyledTopicQuestions'

export default TopicQuestions
