import React from 'react'
import PairFieldList from '@/ui/common/PairFieldList'

function BodyParams(props) {
  const { control, register, labels } = props

  return (
    <>
      <PairFieldList
        data-test-id="BodyPairFieldList"
        name={'bodyParams'}
        type={'body'}
        register={register}
        control={control}
        labels={labels}
      />
    </>
  )
}

export default BodyParams
