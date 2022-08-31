import styled from 'styled-components'

export const ControlsStyleComponent = styled.div`
  height: 155px;
  width: 1470px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  margin: 0px auto;
`

export const ControlStyleComponent = styled.div`
  display: flex;

  height: 66px;

  align-items: center;

  cursor: pointer;
`

export const ControlTextStyleComponent = styled.div`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #eeeeee;
`

export const ControlSortedButtonStyleComponent = styled.div`
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;

  color: #eeeeee;

  width: 248px;
  height: 70px;

  background-color: #52519d;
  border-radius: 40px;

  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: #4a498a;
  }

  &:active {
    background-color: #403f7a;
  }
`
