import { useFormik } from 'formik';

import { Input } from '@components/Input';

import { schema } from './schema';
import { Form } from './styles';

// interface FormFields {
//   name: string;
//   email: string;
//   message: string;
// }

export const ContactForm = () => {
  // function onSubmit(data: FormFields) {}
  function onSubmit() {}

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

  return (
    // <Form action="https://formsubmit.co/luanpanno@gmail.com" method="POST">
    <Form onSubmit={formik.handleSubmit}>
      <div className="wrapper">
        <p>Fique à vontade para me mandar um email!</p>
        <div className="fields">
          <Input
            type="text"
            name="name"
            placeholder="Insira seu nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!getErrorName()}
            errorText={getErrorName()}
          />
          <Input
            type="text"
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
        </div>
      </div>
      <button type="submit">Enviar</button>
    </Form>
  );
};
