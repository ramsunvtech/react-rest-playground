import React from 'react'

// Components.
import ReactRestPlayground from '../src'
import ErrorHandler from './ErrorHandler'

function App() {
  return (
    <>
      <ErrorHandler>
        <ReactRestPlayground />
      </ErrorHandler>
    </>
  )
}

export default App
