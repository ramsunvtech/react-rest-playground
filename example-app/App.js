import React from 'react'

// Components.
import ReactRestPlayground from '../src'
import ErrorHandler from './ErrorHandler'

// CSS.
import '../src/styles/main.css'

// Props.
const methodType = 'get'
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const onSend = (payload) => { console.log(payload) }

const initialValues = {
  endpoint: {
    method: methodType,
    apiUrl: apiUrl,
  }
}

const labels = {
  endpoint: {
    placeholder: 'http://www.site.com/auth',
    testButton: 'Test Now',
  },
  result: {
    status: 'Response Status'
  }
}

function App() {
  return (
    <>
      <ErrorHandler>
        <ReactRestPlayground
          initialValues={initialValues}
          labels={labels}
          onSend={onSend}
        />
      </ErrorHandler>
    </>
  )
}

export default App
