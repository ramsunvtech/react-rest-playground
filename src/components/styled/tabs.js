import styled from 'styled-components'

export const TabList = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  &:first-child{
    margin-left: 0;
  }
`

const activeTabStyles = `
  border-bottom: 0.2rem solid #fe6c37;
  font-weight: 700;
`

export const TabListItem = styled.div`
  margin-left: 2rem;
  cursor: pointer;
  ${props => props.isActive ? activeTabStyles : ''};

`