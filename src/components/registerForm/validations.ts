import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required().min(2).max(255),
    email: yup.string().required().email().min(2).max(255),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Senha invalida' }
      )
      .min(8)
      .max(16),
    passwordConfirme: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Senha invalida' }
      )
      .min(8)
      .max(16)
  })
  .required()
