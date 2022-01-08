import React from 'react'
import { useFieldArray } from 'react-hook-form'
import {
  PairFieldBlock,
  StyledRemoveButton,
  StyledInputField,
  StyledAddButton,
} from '@/styled/blocks'

function PairFieldList(props) {
  const { name, control, register, labels } = props
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  return (
    <PairFieldBlock className="rpg-pair-field-block">
      {fields.map(({ id, key, value }, index) => {
        return (
          <div key={id}>
            <StyledInputField
              type="text"
              defaultValue={key}
              {...register(`${name}[${index}].key`)}
              className="rpg-pair-field-input"
            />
            <StyledInputField
              type="text"
              defaultValue={value}
              {...register(`${name}[${index}].value`)}
              className="rpg-pair-field-input"
            />
            <StyledRemoveButton
              type="button"
              onClick={() => remove(index)}
              className="rpg-remove-btn"
            >
              {labels.removeButton}
            </StyledRemoveButton>
          </div>
        )
      })}
      <StyledAddButton type="button" onClick={() => append({})}>
        {labels.addButton}
      </StyledAddButton>
    </PairFieldBlock>
  )
}

export default PairFieldList
