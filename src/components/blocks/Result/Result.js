import React from 'react'
import Header from '@/blocks/Result/Header'
import Response from '@/blocks/Result/Response'
import { ResultBlock } from '@/styled/blocks'

function Result(props) {
  const { response = {}, labels } = props

  return (
    <>
      <ResultBlock>
        <Header response={response} labels={labels} />
        <Response response={response} />
      </ResultBlock>
    </>
  )
}

export default Result
