import React from 'react'

function Header(props) {
  const { response = {} } = props

  return (
    <>
      <div class="status">status: {JSON.stringify(response.status)}</div>
    </>
  )
}

export default Header
