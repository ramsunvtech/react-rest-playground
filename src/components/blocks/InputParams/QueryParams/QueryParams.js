import React from 'react'
import PairFieldList from '@/ui/common/PairFieldList'

function QueryParams(props) {
  const { control, register } = props

  return (
    <>
      <PairFieldList
        name={'queryParams'}
        type={'Query'}
        register={register}
        control={control}
      />
    </>
  )
}

export default QueryParams
