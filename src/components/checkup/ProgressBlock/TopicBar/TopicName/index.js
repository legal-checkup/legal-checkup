import styled from 'styled-components'

const TopicName = styled.div`
  opacity: ${({ activeTopic }) => (activeTopic ? '1' : '0')};
    &:hover {
      opacity: ${({ activeTopic }) => (activeTopic ? '1' : '0.5')};
    }
  justify-self: center;
  padding-bottom: 30px;
  margin-top: 0;
  align-self: center;
  flex-basis: min-content;
  flex-shrink: 5;
`

TopicName.displayName = 'StyledTopicName'

export default TopicName
