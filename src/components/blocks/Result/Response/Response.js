import React from 'react'
import CodeEditor from '@/ui/common/CodeEditor'

function Response(props) {
  const { response = {} } = props

  return (
    <div className="rpg-block-response" data-testid="response-editor">
      <CodeEditor
        name="responseEditor"
        data={response.data}
        height={300}
        readOnly
      />
    </div>
  )
}

export default Response
