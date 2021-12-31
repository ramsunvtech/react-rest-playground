import React, { useState } from 'react'
import Endpoint from '@/blocks/Endpoint'
import InputParams from '@/blocks/InputParams'
import Result from '@/blocks/Result'
import { useForm } from 'react-hook-form'
import useFetchApi from '@/hooks/useFetchApi'
import convertParams from '@/utils/convert-params'
import '@/styles/globals.css'

function ReactRestPlayground(props) {
  const { method, endPoint, headers, query, body, onSend } = props
  const [requestData, setRequestData] = useState({})
  const [responseData, setResponseData] = useState({})
  const {
    register,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      method: method,
      url: endPoint,
      queryParams: query,
      headerParams: headers,
      bodyParams: body,
    }
  })

  // Api call
  // store the data in a response state
  useFetchApi(requestData, (response) => {
    setResponseData(response)
  })

  // pass it to the response component as props
  const onSubmit = (request) => {
    request['queryParams'] = convertParams(request.queryParams)
    request['headerParams'] = convertParams(request.headerParams)
    request['bodyParams'] = convertParams(request.bodyParams)
    onSend(request)
    setRequestData(request)
  }

  return (
    <>
      <div className="flex flexColumn">
        <div className="flex flexRow justifyCenter">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Endpoint register={register} />
            <InputParams register={register} control={control}/>
          </form>
        </div>
        <div  className="flex flexRow justifyCenter">
          <Result response={responseData} />
        </div>
      </div>
    </>
  )
}

export default ReactRestPlayground
