import React from 'react'
import PairFieldList from '@/ui/common/PairFieldList'

function BodyParams(props) {
  const { control, register } = props

  return (
    <>
      <PairFieldList
        data-test-id="BodyPairFieldList"
        name={'bodyParams'}
        type={'body'}
        register={register}
        control={control}
      />
    </>
  )
}

export default BodyParams
