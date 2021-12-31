import React from 'react'
import InputText from '@/ui/fields/InputText'
import ActionButtons from '@/ui/fields/ActionButtons'
import DropDown from '@/ui/fields/DropDown'
import { methods } from '@/utils/http-methods'
import { useForm } from 'react-hook-form'
import BodyParams from '@/blocks/InputParams/BodyParams'
import HeaderParams from '@/blocks/InputParams/HeaderParams'
import QueryParams from '@/blocks/InputParams/QueryParams'

function Endpoint(props) {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    control,
  } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DropDown name="method" register={register} options={methods} />
        <InputText
          placeholder="ex: http://localhost:3000/api/users"
          name={'url'}
          register={register}
        />
        <ActionButtons>Submit</ActionButtons>

        <div>Query Params</div>
        <QueryParams register={register} control={control} />
        <br />
        <br />

        <div>Header Params</div>
        <HeaderParams register={register} control={control} />
        <br />
        <br />

        <div>Body Params</div>
        <BodyParams register={register} control={control} />
        <br />
        <br />
      </form>
    </>
  )
}

export default Endpoint
