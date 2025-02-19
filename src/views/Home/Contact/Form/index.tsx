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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (data: FormFields) => {
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

        formik.resetForm();
        toast.success(t('contactFormSuccess'));
      } catch (error: any) {
        toast.error(error);
      }
    },
  });

  const getFormikError = (field: Fields): string =>
    (formik.touched[field] && formik.errors[field]) || '';

  const isDisabled = () => {
    const { name, email, message } = formik.values;

    return (
      !name ||
      !email ||
      !message ||
      !isObjectEmpty(formik.errors) ||
      formik.isSubmitting
    );
  };

  return (
    <Form
      onSubmit={formik.handleSubmit}
      role="form"
      aria-label={t('contactFormTitle')}
    >
      <div className="wrapper">
        <p>{t('contactFormP')}</p>
        <div className="fields">
          <Input
            name="name"
            label={t('contactFormNamePlaceholder')}
            placeholder={t('contactFormNamePlaceholder')}
            aria-required="true"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={t(getFormikError('name'))}
          />
          <Input
            name="email"
            type="email"
            label={t('contactFormEmailPlaceholder')}
            placeholder={t('contactFormEmailPlaceholder')}
            aria-required="true"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={getFormikError('email')}
          />
          <Input
            type="textarea"
            name="message"
            label={t('contactFormMessagePlaceholder')}
            placeholder={t('contactFormMessagePlaceholder')}
            aria-required="true"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={getFormikError('message')}
          />
          <input type="hidden" name="_captcha" value="false" />
        </div>
      </div>
      <button type="submit" disabled={isDisabled()}>
        {formik.isSubmitting ? t('sending') : t('contactFormSubmit')}
      </button>
    </Form>
  );
};

export default ContactForm;
