import React, { useState } from 'react'
import Endpoint from '@/blocks/Endpoint'
import InputParams from '@/blocks/InputParams'
import Result from '@/blocks/Result'
import { useForm } from 'react-hook-form'
import useFetchApi from '@/hooks/useFetchApi'
import convertParams from '@/utils/convert-params'
import overwriteDefaultParams from '@/utils/overwrite-params'
import { noop } from '@/utils/default-params'
import { FlexColumn, FlexRow } from '@/styled/general'

export default function ReactRestPlayground({
  initialValues,
  labels,
  onSend = noop,
  className,
}) {
  //Overwrite default params
  const { defaultValues, endpointLabels, parametersLabels, resultLabels } =
    overwriteDefaultParams({ initialValues, labels })

  // States.
  const [requestData, setRequestData] = useState({})
  const [responseData, setResponseData] = useState({})
  const { register, handleSubmit, control } = useForm({
    defaultValues,
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
    <FlexColumn className={className}>
      <FlexRow className="rpg-row" justify="center">
        <form className="rpg-form" onSubmit={handleSubmit(onSubmit)}>
          <Endpoint
            data-test-id="Endpoint"
            register={register}
            labels={endpointLabels}
          />
          <InputParams
            data-test-id="InputParams"
            register={register}
            control={control}
            labels={parametersLabels}
          />
        </form>
      </FlexRow>
      <FlexRow className="rpg-result-row" justify="center">
        <Result
          data-test-id="Result"
          response={responseData}
          labels={resultLabels}
        />
      </FlexRow>
    </FlexColumn>
  )
}
