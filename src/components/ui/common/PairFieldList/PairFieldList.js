import React from 'react'
import { useFieldArray } from 'react-hook-form'

function PairFieldList(props) {
  const { name, type, control, register } = props
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  return (
    <div data-testid="pair-field">
      {fields.map(({ id, key, value }, index) => {
        return (
          <div key={id}>
            <input
              type="text"
              defaultValue={key}
              className="textbox"
              {...register(`${name}[${index}].key`)}
            />
            <input
              type="text"
              defaultValue={value}
              className="textbox"
              {...register(`${name}[${index}].value`)}
            />
            <button
              type="button"
              className="removeButton"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        className="addButton"
        onClick={() => append({})}
      >
        Add {type}
      </button>
    </div>
  )
}

export default PairFieldList
