import React from 'react'

// Components.
import ReactRestPlayground from '../src'
import ErrorHandler from './ErrorHandler'

import {
  methodType,
  apiUrl,
  headerDetails,
  queryParamDetails,
  bodyDetails,
  onSend
} from './utils/app-props'

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
