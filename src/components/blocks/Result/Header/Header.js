import React from 'react'

function Header(props) {
  const { response = {}, labels } = props

  return (
    <div className="rpg-result-header" data-testid="status">
      {labels.status}: {JSON.stringify(response.status)}
    </div>
  )
}

export default Header
