import { useFormik } from 'formik'
import * as S from './styles'
import { FormValues } from '../Cart'

type InputType = {
  title: string
  width?: number
  className?: string
  type?: string
  name: keyof FormValues
  value: string
  form: ReturnType<typeof useFormik<FormValues>>
}


const Input = ({title, width, className, type, name, value, form}: InputType) => {

  const getErrorMessage = (name: keyof FormValues, message?: string | undefined) => {
    const estaAlterado = name in form.touched
    const estaInvalido = name in form.errors

    if(estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }

  return (
    <>
      <S.InputContainer className={className}>
        <S.Label>{title}</S.Label>
        <S.Caixa onBlur={form.handleBlur} onChange={form.handleChange} width={width} type={type ? type : 'text'} name={name} value={value} />
        <S.Erro>{getErrorMessage(name, form.errors[name])}</S.Erro>
      </S.InputContainer>
    </>
  )
}

export default Input