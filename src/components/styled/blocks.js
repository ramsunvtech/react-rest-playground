import styled from 'styled-components'
import { StyledTextBox } from './general'

export const EndpointBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`

export const ResultBlock = styled.div`
  min-width: 50rem;
`

export const PairFieldBlock = styled.div`
  min-width: 50rem;
`

export const StyledRemoveButton = styled.button`
  background-color: #cd0909;
  border: 1px solid #cd0909;

  &:hover {
    background-color: #e71818;
    border: 1px solid #e71818;
  }
`

export const StyledInputField = styled(StyledTextBox)`
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  min-width: 22rem !important;
`

export const StyledAddButton = styled.button`
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`