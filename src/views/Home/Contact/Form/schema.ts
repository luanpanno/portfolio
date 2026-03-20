import * as yup from 'yup';

type SchemaMessages = {
  emailFormat: string;
  emailRequired: string;
  messageRequired: string;
  nameRequired: string;
};

const makeSchema = ({
  emailFormat,
  emailRequired,
  messageRequired,
  nameRequired,
}: SchemaMessages) => {
  return yup.object().shape({
    name: yup.string().required(nameRequired),
    email: yup.string().email(emailFormat).required(emailRequired),
    message: yup.string().required(messageRequired),
  });
};

export default makeSchema;
