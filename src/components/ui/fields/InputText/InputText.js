import React from 'react'

function InputText(props) {
  const { name, endPoint, placeholder, className, register } = props

  return (
    <>
      <input type="text" className={className} value={endPoint} placeholder={placeholder} {...register(name)} />
    </>
  )
}

export default InputText
