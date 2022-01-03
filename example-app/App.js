import React from 'react'

// Components.
import ReactRestPlayground from '../src'
import ErrorHandler from './ErrorHandler'

// CSS.
import '../src/styles/main.css'

// Props.
const methodType = 'get'
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const headerDetails = [{ key: 'Auth', value: '1234' }]
const queryParamDetails = [{ key: 'title', value: 'test title' }]
const bodyDetails = [{ key: 'title', value: 'test title' }, { key: 'body', value: 'test body' }, { key: 'userId', value: 1 }]
const onSend = (payload) => { console.log(payload) }

function App() {
  return (
    <>
      <ErrorHandler>
        <ReactRestPlayground
          method={methodType}
          endPoint={apiUrl}
          headers={headerDetails}
          query={queryParamDetails}
          body={bodyDetails}
          onSend={onSend}
        />
      </ErrorHandler>
    </>
  )
}

export default App
