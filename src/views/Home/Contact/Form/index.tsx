import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';

import Input from '@components/Input';

import { isObjectEmpty } from '@utils/objects';

import makeSchema from './schema';
import { Form } from './styles';

type Fields = 'name' | 'email' | 'message';
type FormFields = {
  name: string;
  email: string;
  message: string;
};

const initialValues: FormFields = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const { t, i18n } = useTranslation('common');
  const validationSchema = makeSchema(i18n.language);

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

      toast.success(t('contactFormSuccess'));
    } catch (error: any) {
      toast.error(error);
    }
  }

  const formik = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
  });

  const getFormikError = (field: Fields): string =>
    (formik.touched[field] && formik.errors[field]) || '';

  const isDisabled = () => {
    const { name, email, message } = formik.values;

    return !name || !email || !message || !isObjectEmpty(formik.errors);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="wrapper">
        <p>{t('contactFormP')}</p>
        <div className="fields">
          <Input
            name="name"
            placeholder={t('contactFormNamePlaceholder')}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={t(getFormikError('name'))}
          />
          <Input
            name="email"
            placeholder={t('contactFormEmailPlaceholder')}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={getFormikError('email')}
          />
          <Input
            type="textarea"
            name="message"
            placeholder={t('contactFormMessagePlaceholder')}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={getFormikError('message')}
          />
          <input type="hidden" name="_captcha" value="false" />
        </div>
      </div>
      <button type="submit" disabled={isDisabled()}>
        {t('contactFormSubmit')}
      </button>
    </Form>
  );
};

export default ContactForm;
