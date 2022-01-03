import React from 'react'
import { StyledTextBox } from '@/styled/general'

function InputText(props) {
  const { name, endPoint, placeholder, register } = props

  return (
    <>
      <StyledTextBox value={endPoint} placeholder={placeholder} {...register(name)} />
    </>
  )
}

export default InputText
