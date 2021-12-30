import React from 'react'
import { useFieldArray } from 'react-hook-form'

function PairFieldList(props) {
  const { name, type, control, register } = props
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  return (
    <>
      {fields.map(({ id, key, value }, index) => {
        return (
          <div key={id}>
            <input
              type="text"
              defaultValue={key}
              {...register(`${name}[${index}].key`)}
            />
            <input
              type="text"
              defaultValue={value}
              {...register(`${name}[${index}].value`)}
            />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        )
      })}
      <button type="button" onClick={() => append({})}>
        Add {type}
      </button>
    </>
  )
}

export default PairFieldList
