import styled from 'styled-components'

const TopicQuestions = styled.div`
  background-color: #ededed;
  font-weight: ${({ activeTopic }) => (activeTopic ? 'bold' : 'normal')};
  margin-top: -55px;
  margin-bottom: 20px;
  margin-left: -5px;
  margin-right: 5px;
  display: inline-block;
  color: ${({ activeTopic }) => (activeTopic ? '#b62645' : '#a1a1a1')};
`

TopicQuestions.displayName = 'StyledTopicQuestions'

export default TopicQuestions
