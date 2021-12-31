import React from 'react'

function InputText(props) {
  const { name, placeholder, register } = props
  return (
    <>
      <input type="text" placeholder={placeholder} {...register(name)} />
    </>
  )
}

export default InputText
