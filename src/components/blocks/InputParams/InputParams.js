import React from 'react'
import BodyParams from '@/blocks/InputParams/BodyParams'
import HeaderParams from '@/blocks/InputParams/HeaderParams'
import QueryParams from '@/blocks/InputParams/QueryParams'
import Tabs from '@/ui/common/Tabs'

function InputParams(props) {
  const {
    register,
    control,
    labels,
  } = props

  return (
    <Tabs data-test-id="Tabs" id="Tabs">
      <Tabs.Item
        data-test-id="query"
        id="query"
        title={labels?.query?.tabTitle}
      >
        <QueryParams
          register={register}
          control={control}
          labels={labels?.query}
        />
      </Tabs.Item>
      <Tabs.Item
        data-test-id="header"
        id="header"
        title={labels?.headers?.tabTitle}
      >
        <HeaderParams
          register={register}
          control={control}
          labels={labels?.headers}
        />
      </Tabs.Item>
      <Tabs.Item
        data-test-id="body"
        id="body"
        title={labels?.body?.tabTitle}
      >
        <BodyParams register={register} control={control} labels={labels?.body} />
      </Tabs.Item>
    </Tabs>
  )
}

export default InputParams
