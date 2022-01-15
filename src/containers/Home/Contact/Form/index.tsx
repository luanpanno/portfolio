import { toast } from 'react-toastify';

import { useFormik } from 'formik';

import { Input } from '@components/Input';

import { isEmptyObject } from '@utils/isEmptyObject';

import { schema } from './schema';
import { Form } from './styles';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  async function onSubmit(data: FormFields) {
    try {
      const { name, email, message } = data;
      const formData = new FormData();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('_captcha', 'false');

      await fetch('https://formsubmit.co/luanpanno@gmail.com', {
        method: 'POST',
        body: formData,
      });

      toast.success(
        'Email enviado com sucesso! Em breve entrarei em contato com você. :)'
      );
    } catch (error) {
      toast.error(error);
    }
  }

  const formik = useFormik({
    onSubmit,
    validationSchema: schema,
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function getErrorName() {
    return formik.touched.name && formik.errors.name;
  }

  function getErrorEmail() {
    return formik.touched.email && formik.errors.email;
  }

  function getErrorMessage() {
    return formik.touched.message && formik.errors.message;
  }

  function isDisabled() {
    const { name, email, message } = formik.values;

    return !name || !email || !message || !isEmptyObject(formik.errors);
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="wrapper">
        <p>Fique à vontade para me mandar um email!</p>
        <div className="fields">
          <Input
            name="name"
            placeholder="Insira seu nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!getErrorName()}
            errorText={getErrorName()}
          />
          <Input
            name="email"
            placeholder="Insira seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!getErrorEmail()}
            errorText={getErrorEmail()}
          />
          <Input
            type="textarea"
            name="message"
            placeholder="Insira sua mensagem"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!getErrorMessage()}
            errorText={getErrorMessage()}
          />
          <input type="hidden" name="_captcha" value="false" />
        </div>
      </div>
      <button type="submit" disabled={isDisabled()}>
        Enviar
      </button>
    </Form>
  );
};
