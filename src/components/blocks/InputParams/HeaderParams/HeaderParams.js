import React from 'react'
import PairFieldList from '@/ui/common/PairFieldList'

function HeaderParams(props) {
  const { control, register } = props

  return (
    <>
      <PairFieldList
        name={'headerParams'}
        type={'header'}
        register={register}
        control={control}
      />
    </>
  )
}

export default HeaderParams
