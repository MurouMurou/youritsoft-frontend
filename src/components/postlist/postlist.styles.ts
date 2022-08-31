import styled from 'styled-components'

export const PostListStyleComponent = styled.div`
  width: 870px;
  height: 770px;

  background: #333348;
  border-radius: 40px;

  margin-left: 30px;
`

export const PostListContainerStyleComponent = styled.div`
  margin: 108px 150px;

  height: 554px;
  width: 570px;

  overflow: overlay;

  position: relative;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`
