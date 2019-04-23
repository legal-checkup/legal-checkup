import styled from 'styled-components'

const TopicName = styled.div`
  position: relative;
  top: -20px;
  font-size: 12px;
  transform: rotate(-35deg);
  font-family: MuseoSansCyrl_900, sans-serif;
  font-weight: 900;
  color: ${({ activeTopic }) => (activeTopic ? '#b62645' : '#a1a1a1')};
  white-space: nowrap;
`

TopicName.displayName = 'StyledTopicName'

export default TopicName
