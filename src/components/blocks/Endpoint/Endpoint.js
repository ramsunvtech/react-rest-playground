import React from 'react'
import InputText from '@/ui/fields/InputText'
import ActionButtons from '@/ui/fields/ActionButtons'
import DropDown from '@/ui/fields/DropDown'
import { methods } from '@/utils/http-methods'

function Endpoint(props) {
  const { register } = props

  return (
    <>
      <div className="endpoint">
        <DropDown
          data-test-id="EndpointDropDown"
          name="method"
          register={register}
          options={methods}
        />
        <InputText
          data-test-id="EndpointInputText"
          placeholder="ex: http://localhost:3000/api/users"
          name="url"
          register={register}
        />
        <ActionButtons>Submit</ActionButtons>
      </div>
    </>
  )
}

export default Endpoint
