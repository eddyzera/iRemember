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
    name: yup.string().required('Nome obrigatorio *').min(2).max(255),
    email: yup
      .string()
      .required('e-mail obrigatorio *')
      .email()
      .min(2)
      .max(255),
    password: yup
      .string()
      .required('Senha obrigatória *')
      .min(8)
      .max(16)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Deve conter no minimo 8 caracteries, uma letra maiuscula, uma minuscula, um numero e um caracterie especial'
      ),
    passwordConfirme: yup
      .string()
      .required('senha obrigatória *')
      .oneOf([yup.ref('password'), null], 'Senha invalida *')
      .min(8)
      .max(16)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Deve conter no minimo 8 caracteries, uma letra maiuscula, uma minuscula, um numero e um caracterie especial'
      )
  })
  .required()
