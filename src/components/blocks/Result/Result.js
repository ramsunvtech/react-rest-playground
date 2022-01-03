import React from 'react'
import Header from '@/blocks/Result/Header'
import Response from '@/blocks/Result/Response'
import { ResultBlock } from '@/styled/blocks'

function Result(props) {
  const { response = {} } = props

  return (
    <>
      <ResultBlock>
        <Header response={response} />
        <Response
          response={response}
        />
      </ResultBlock>
    </>
  )
}

export default Result
