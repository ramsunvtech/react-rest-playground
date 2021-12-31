import React from 'react'
import BodyParams from '@/blocks/InputParams/BodyParams'
import HeaderParams from '@/blocks/InputParams/HeaderParams'
import QueryParams from '@/blocks/InputParams/QueryParams'
import Tabs from '@/ui/common/Tabs'

function InputParams(props) {
  const { register, control } = props

  return (
    <Tabs>
      <Tabs.Item id="query" title="Query Params">
        <p>Query Params</p>
        <QueryParams register={register} control={control} />
      </Tabs.Item>
      <Tabs.Item id="header" title="Headers">
        <p>Header Params</p>
        <HeaderParams register={register} control={control} />
      </Tabs.Item>
      <Tabs.Item id="body" title="Body">
        <p>Body Params</p>
        <BodyParams register={register} control={control} />
      </Tabs.Item>
    </Tabs>
  )
}

export default InputParams
