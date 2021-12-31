import React from 'react'
import Header from '@/blocks/Result/Header'
import Response from '@/blocks/Result/Response'
import styles from '@/styles/Result.module.css'

function Result(props) {
  const { response = {} } = props

  return (
    <>
      <div className={styles.result}>
        <Header response={response} />
        <Response
          response={response}
        />
      </div>
    </>
  )
}

export default Result
