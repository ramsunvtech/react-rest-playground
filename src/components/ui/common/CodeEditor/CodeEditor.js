import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-github'

function CodeEditor(props) {
  const { name, onChange, readOnly, data, height } = props

  return (
    <>
      <AceEditor
        mode="json"
        theme="github"
        name={name}
        defaultValue={''}
        readOnly={readOnly}
        onChange={onChange}
        width={'100%'}
        height={height}
        value={JSON.stringify(data, null, 2)}
        fontSize={12}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </>
  )
}

export default CodeEditor
