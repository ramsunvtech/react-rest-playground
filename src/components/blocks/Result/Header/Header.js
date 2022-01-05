import React from 'react'

function Header(props) {
  const { response = {}, labels } = props

  return (
    <>
      <div data-testid="status">
        {labels.status}: {JSON.stringify(response.status)}
      </div>
    </>
  )
}

export default Header
