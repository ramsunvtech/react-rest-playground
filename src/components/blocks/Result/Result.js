import React from 'react'
import Header from '@/blocks/Result/Header'
import Response from '@/blocks/Result/Response'

function Result(props) {
  const { response = {} } = props

  return (
    <>
      <div className="result">
        <Header response={response} />
        <Response
          response={response}
        />
      </div>
    </>
  )
}

export default Result
