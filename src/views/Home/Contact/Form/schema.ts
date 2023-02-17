import * as yup from 'yup';

const makeSchema = (language: string) => {
  const checkLanguage = (pt: string, en: string) =>
    language.includes('pt') ? pt : en;

  const nameRequired = checkLanguage(
    'Nome é um campo obrigatório',
    'Name is a required field'
  );
  const emailFormat = checkLanguage(
    'Email precisa ter um formato válido',
    'Email needs to be valid'
  );
  const emailRequired = checkLanguage(
    'Email é um campo obrigatório',
    'Email is a required field'
  );
  const messageRequired = checkLanguage(
    'Mensagem é um campo obrigatório',
    'Message is a required field'
  );

  return yup.object().shape({
    name: yup.string().required(nameRequired),
    email: yup.string().email(emailFormat).required(emailRequired),
    message: yup.string().required(messageRequired),
  });
};

export default makeSchema;
