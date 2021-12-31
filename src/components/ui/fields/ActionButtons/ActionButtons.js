import React from 'react'

function ActionButtons(props) {
  const { children } = props
  return (
    <>
      <button type="submit">{children}</button>
    </>
  )
}

export default ActionButtons
