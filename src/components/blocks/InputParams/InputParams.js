import React from 'react'
import BodyParams from '@/blocks/InputParams/BodyParams'
import HeaderParams from '@/blocks/InputParams/HeaderParams'
import QueryParams from '@/blocks/InputParams/QueryParams'

function InputParams(props) {
  const { register, control } = props

  return (
    <>
      <div>Query Params</div>
      <QueryParams register={register} control={control} />
      <br />

      <div>Header Params</div>
      <HeaderParams register={register} control={control} />
      <br />

      <div>Body Params</div>
      <BodyParams register={register} control={control} />
      <br />
    </>
  )

}

export default InputParams
