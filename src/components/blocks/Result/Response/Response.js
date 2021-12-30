import React from 'react'
import Header from '@/blocks/Result/Header'
import CodeEditor from '@/ui/Common/CodeEditor'

function Response(props) {
  const { response = {} } = props

  return (
    <>
      <Header response={response} />
      <CodeEditor
        name={'responseEditor'}
        data={response.data}
        readOnly={true}
        height={'300px'}
      />
    </>
  )
}

export default Response
