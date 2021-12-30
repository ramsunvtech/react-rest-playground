import React, { useState, useEffect } from 'react'
import Endpoint from '@/blocks/Endpoint'
import useFetchApi from '@/hooks/useFetchApi'
import Response from '@/blocks/Result/Response'
import convertParams from '@/utils/convert-params'

function ReactRestPlayground() {
  const [requestData, setRequestData] = useState({})
  const [responseData, setResponseData] = useState({})

  // Api call
  // store the data in a response state
  useFetchApi(requestData, (response) => {
    console.log(response)
    setResponseData(response)
  })

  // pass it to the response component as props
  const onSubmit = (request) => {
    request['queryParams'] = convertParams(request.queryParams)
    request['headerParams'] = convertParams(request.headerParams)
    request['bodyParams'] = convertParams(request.bodyParams)
    console.log(request)
    setRequestData(request)
  }

  return (
    <>
      <Endpoint onSubmit={onSubmit} />
      <Response response={responseData} />
    </>
  )
}

export default ReactRestPlayground
