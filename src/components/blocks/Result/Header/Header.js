import React from 'react'

function Header(props) {
  const { response = {} } = props

  return (
    <>
      <div data-testid="status">status: {JSON.stringify(response.status)}</div>
    </>
  )
}

export default Header
