import styled from 'styled-components'

export const PostStyleComponent = styled.div`
  width: 570px;
  position: relative;

  cursor: pointer;
`

export const PostTitleStyleComponent = styled.div`
  width: 100%;

  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 45px;

  color: #ffffff;

  padding-left: 15px;

  &:first-letter {
    text-transform: uppercase;
  }
`

export const PostBodyStyleComponent = styled.div`
  width: 100%;
  margin-top: 20px;

  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  color: #ffffff;

  &:first-letter {
    text-transform: uppercase;
  }
`

export const PostDividerBodyStyleComponent = styled.div`
  width: 100%;
  height: 1px;

  margin: 30px 0px;

  border-bottom: 1px solid #4c4c6a;
`
