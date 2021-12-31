import React from 'react'
import { useFieldArray } from 'react-hook-form'
import styles from '@/styles/PairFieldList.module.css'

function PairFieldList(props) {
  const { name, type, control, register } = props
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  })

  return (
    <div className={styles.pairfield}>
      {fields.map(({ id, key, value }, index) => {
        return (
          <div key={id}>
            <input
              type="text"
              defaultValue={key}
              className={styles.textbox}
              {...register(`${name}[${index}].key`)}
            />
            <input
              type="text"
              defaultValue={value}
              className={styles.textbox}
              {...register(`${name}[${index}].value`)}
            />
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        className={styles.addButton}
        onClick={() => append({})}
      >
        Add {type}
      </button>
    </div>
  )
}

export default PairFieldList
