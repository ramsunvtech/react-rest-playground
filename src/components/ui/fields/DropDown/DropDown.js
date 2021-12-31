import React from 'react'

function DropDown(props) {
  const { name, options, register } = props
  return (
    <>
      <select {...register(name)}>
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
