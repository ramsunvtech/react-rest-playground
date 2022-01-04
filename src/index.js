import React, { useState } from 'react'
import Endpoint from '@/blocks/Endpoint'
import InputParams from '@/blocks/InputParams'
import Result from '@/blocks/Result'
import { useForm } from 'react-hook-form'
import useFetchApi from '@/hooks/useFetchApi'
import convertParams from '@/utils/convert-params'
import { FlexColumn, FlexRow } from '@/styled/general'

function ReactRestPlayground(props) {
  const { initialvalues, labels = {}, onSend } = props
  const { endpoint, parameters } = initialvalues
  const {
    endpoint: endpointLabel = {},
    parameters: parametersLabel = {},
    result: resultLabel = {},
  } = labels
  const [requestData, setRequestData] = useState({})
  const [responseData, setResponseData] = useState({})
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      method: endpoint.method,
      url: endpoint.apiUrl,
      queryParams: parameters.query,
      headerParams: parameters.headers,
      bodyParams: parameters.body,
    },
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
      <FlexColumn>
        <FlexRow justify="center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Endpoint
              data-test-id="Endpoint"
              register={register}
              labels={endpointLabel}
            />
            <InputParams
              data-test-id="InputParams"
              register={register}
              control={control}
              labels={parametersLabel}
            />
          </form>
        </FlexRow>
        <FlexRow justify="center">
          <Result
            data-test-id="Result"
            response={responseData}
            labels={resultLabel}
          />
        </FlexRow>
      </FlexColumn>
    </>
  )
}

export default ReactRestPlayground
