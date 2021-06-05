import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Nome é um campo obrigatório'),
  email: yup
    .string()
    .email('Email precisa ter um formato válido')
    .required('Email é um campo obrigatório'),
  message: yup.string().required('Mensagem é um campo obrigatório'),
});
