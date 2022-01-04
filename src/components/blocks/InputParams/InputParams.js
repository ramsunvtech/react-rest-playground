import React from 'react'
import BodyParams from '@/blocks/InputParams/BodyParams'
import HeaderParams from '@/blocks/InputParams/HeaderParams'
import QueryParams from '@/blocks/InputParams/QueryParams'
import Tabs from '@/ui/common/Tabs'

function InputParams(props) {
  const {
    register,
    control,
    labels: {
      query: queryLabel = {},
      headers: headerLabel = {},
      body: bodyLabel = {},
    },
  } = props

  return (
    <Tabs data-test-id="Tabs" id="Tabs">
      <Tabs.Item
        data-test-id="query"
        id="query"
        title={queryLabel.tabTitle || 'Query Params'}
      >
        <QueryParams
          register={register}
          control={control}
          labels={queryLabel}
        />
      </Tabs.Item>
      <Tabs.Item
        data-test-id="header"
        id="header"
        title={headerLabel.tabTitle || 'Headers'}
      >
        <HeaderParams
          register={register}
          control={control}
          labels={headerLabel}
        />
      </Tabs.Item>
      <Tabs.Item
        data-test-id="body"
        id="body"
        title={bodyLabel.tabTitle || 'Body'}
      >
        <BodyParams register={register} control={control} labels={bodyLabel} />
      </Tabs.Item>
    </Tabs>
  )
}

export default InputParams
