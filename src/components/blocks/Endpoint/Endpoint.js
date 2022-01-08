import React from 'react'
import InputText from '@/ui/fields/InputText'
import ActionButtons from '@/ui/fields/ActionButtons'
import DropDown from '@/ui/fields/DropDown'
import { EndpointBlock } from '@/styled/blocks'
import { methods } from '@/utils/http-methods'

function Endpoint(props) {
  const { register, labels } = props

  return (
    <>
      <EndpointBlock className="rpg-block-endpoint">
        <DropDown
          data-test-id="EndpointDropDown"
          name="method"
          register={register}
          options={methods}
        />
        <InputText
          data-test-id="EndpointInputText"
          placeholder={labels.placeholder}
          name="url"
          register={register}
        />
        <ActionButtons>{labels.testButton}</ActionButtons>
      </EndpointBlock>
    </>
  )
}

export default Endpoint
