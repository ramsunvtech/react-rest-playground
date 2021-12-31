import React from 'react'
import Header from '@/blocks/Result/Header'
import CodeEditor from '@/ui/common/CodeEditor'

function Response(props) {
  const { response = {} } = props

  return (
    <>
      <div class="response-editor">
        <CodeEditor
          name={'responseEditor'}
          data={response.data}
          readOnly={true}
          height={'300px'}
        />
      </div>
    </>
  )
}

export default Response
