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

const initialvalues = {
  endpoint: {
    method: methodType,
    apiUrl: apiUrl,
  },
  parameters: {
    headers: headerDetails,
    query: queryParamDetails,
    body: bodyDetails
  }
}

const labels = {
  endpoint: {
    placeholder: 'http://localhost:8080/auth',
    testButton: 'test',
  },
  parameters: {
    query: {
      tabTitle: 'Query',
      addButton: 'Add Query',
      removeButton: 'Remove Query',
    },
    headers: {
      tabTitle: 'Headers',
      addButton: 'Add Header',
      removeButton: 'Remove Header',
    },
    body: {
      tabTitle: 'Body',
      addButton: 'Add Body',
      removeButton: 'Remove Body',
    }
  },
  result: {
    status: 'Status'
  }
}

function App() {
  return (
    <>
      <ErrorHandler>
        <ReactRestPlayground
          initialvalues={initialvalues}
          labels={labels}
          onSend={onSend}
        />
      </ErrorHandler>
    </>
  )
}

export default App
