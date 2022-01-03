import styled from 'styled-components'

export const FlexColumn = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
`

export const FlexRow = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  ${props => props.justify ? `justify-content: ${props.justify};` : ''};
`

export const StyledTextBox = styled.input.attrs(() => ({
  type: 'text'
}))`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  border: solid 1px #afafaf;
  min-width: 20rem;
  border-radius: 3px;
`


export const StyledDropDown = styled.select`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  border: 1px solid #afafaf;
  border-radius: 3px;
  min-width: 6rem;
`

export const StyledButton = styled.button`
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  min-width: 5rem;
  font-weight: 600;
  background-color: #256adb;
  border: solid 1px #256adb;
  border-radius: 3px;
  color: #fff;

  &:hover {
    background-color: #3b81f3;
    border-color: #3b81f3;
  }
`
