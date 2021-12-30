import React from 'react'

// Components.
import ReactRestPlayground, {
  ErrorHandler,
} from '@react-rest-playground/components'

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
