import React from 'react'

function DropDown(props) {
  const { name, method, options, register } = props

  return (
    <>
      <select value={method} {...register(name)}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default DropDown
