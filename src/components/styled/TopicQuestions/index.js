import styled from 'styled-components'

const TopicQuestions = styled.div`
  background-color: #ededed;
  font-weight: ${({ activeTopic }) => (activeTopic ? 'bold' : '#c0c0c0')};
  margin-top: -150px;
  margin-bottom: 20px;

  margin-left: -5px;
  margin-right: 5px;

  background-color: #fff;
  display: inline-block;
`

TopicQuestions.displayName = 'StyledTopicQuestions'

export default TopicQuestions
