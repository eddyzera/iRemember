import * as yup from 'yup'
yup.setLocale({
  string: {
    min: 'Deve conter até ${min} charactery *',
    max: 'Deve conter no máximo até ${max}',
    email: 'Preecha um e-mail válido'
  }
})

export const schema = yup
  .object({
    email: yup
      .string()
      .required('e-mail obrigatorio *')
      .email()
      .min(2)
      .max(255),
    password: yup.string().required('Senha obligatory *').min(8).max(16)
  })
  .required()
