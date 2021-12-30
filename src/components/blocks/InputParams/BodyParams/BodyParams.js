import React from 'react'
import PairFieldList from '@/ui/common/PairFieldList'

function BodyParams(props) {
  const { control, register } = props

  return (
    <>
      <PairFieldList
        name={'bodyParams'}
        type={'Body'}
        register={register}
        control={control}
      />
    </>
  )
}

export default BodyParams
