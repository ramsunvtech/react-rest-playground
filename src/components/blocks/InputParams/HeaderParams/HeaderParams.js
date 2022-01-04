import React from 'react'
import PairFieldList from '@/ui/common/PairFieldList'

function HeaderParams(props) {
  const { control, register, labels } = props

  return (
    <>
      <PairFieldList
        data-test-id="HeaderPairFieldList"
        name={'headerParams'}
        type={'header'}
        register={register}
        control={control}
        labels={labels}
      />
    </>
  )
}

export default HeaderParams
