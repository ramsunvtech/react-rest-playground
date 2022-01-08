import React from 'react'

function ActionButtons(props) {
  const { children } = props
  return (
    <button type="submit" className="rpg-submit-btn">
      {children}
    </button>
  )
}

export default ActionButtons
