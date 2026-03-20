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
  const { t } = useTranslation('common');
  const validationSchema = makeSchema({
    emailFormat: t('validationEmailFormat'),
    emailRequired: t('validationEmailRequired'),
    messageRequired: t('validationMessageRequired'),
    nameRequired: t('validationNameRequired'),
  });

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

        const response = await fetch(
          'https://formsubmit.co/luanpanno@gmail.com',
          {
            method: 'POST',
            body: formData,
          },
        );

        if (!response.ok) {
          throw new Error('Unable to submit the contact form');
        }

        formik.resetForm();
        toast.success(t('contactFormSuccess'));
      } catch {
        toast.error(t('contactFormError'));
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
            label={t('contactFormNameLabel')}
            placeholder={t('contactFormNamePlaceholder')}
            autoComplete="name"
            required
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={t(getFormikError('name'))}
          />
          <Input
            name="email"
            type="email"
            label={t('contactFormEmailLabel')}
            placeholder={t('contactFormEmailPlaceholder')}
            autoComplete="email"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={getFormikError('email')}
          />
          <Input
            type="textarea"
            name="message"
            label={t('contactFormMessageLabel')}
            placeholder={t('contactFormMessagePlaceholder')}
            required
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={getFormikError('message')}
          />
        </div>
      </div>
      <button type="submit" disabled={isDisabled()}>
        {formik.isSubmitting ? t('sending') : t('contactFormSubmit')}
      </button>
    </Form>
  );
};

export default ContactForm;
