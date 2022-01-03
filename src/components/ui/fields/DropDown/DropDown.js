import React from 'react'
import { StyledDropDown } from '@/styled/general'

function DropDown(props) {
  const { name, method, options, register } = props

  return (
    <>
      <StyledDropDown value={method} {...register(name)}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          )
        })}
      </StyledDropDown>
    </>
  )
}

export default DropDown
