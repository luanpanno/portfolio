import { useTranslation } from 'next-i18next';
import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';

import Input from '@components/Input';

import { Form } from './styles';

type Field = 'name' | 'email' | 'message';
type FormFields = Record<Field, string>;
type FormErrors = Partial<Record<Field, string>>;

const initialValues: FormFields = {
  name: '',
  email: '',
  message: '',
};

const initialTouched: Record<Field, boolean> = {
  name: false,
  email: false,
  message: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const { t } = useTranslation('common');
  const [values, setValues] = useState<FormFields>(initialValues);
  const [touched, setTouched] = useState(initialTouched);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const getErrors = (currentValues: FormFields): FormErrors => {
    const errors: FormErrors = {};

    if (!currentValues.name.trim()) {
      errors.name = t('validationNameRequired');
    }

    if (!currentValues.email.trim()) {
      errors.email = t('validationEmailRequired');
    } else if (!emailPattern.test(currentValues.email.trim())) {
      errors.email = t('validationEmailFormat');
    }

    if (!currentValues.message.trim()) {
      errors.message = t('validationMessageRequired');
    }

    return errors;
  };

  const errors = getErrors(values);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const nextErrors = getErrors(values);

    if (Object.keys(nextErrors).length > 0) {
      setTouched({
        name: true,
        email: true,
        message: true,
      });
      setSubmitStatus('idle');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();

      formData.append('name', values.name.trim());
      formData.append('email', values.email.trim());
      formData.append('message', values.message.trim());
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

      setValues({ ...initialValues });
      setTouched({ ...initialTouched });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (field: Field) => (touched[field] ? errors[field] : '');

  const isDisabled =
    isSubmitting ||
    Object.keys(errors).length > 0 ||
    !values.name.trim() ||
    !values.email.trim() ||
    !values.message.trim();

  return (
    <Form
      onSubmit={handleSubmit}
      role="form"
      aria-label={t('contactFormTitle')}
      aria-busy={isSubmitting}
      noValidate
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
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={getFieldError('name')}
          />
          <Input
            name="email"
            type="email"
            label={t('contactFormEmailLabel')}
            placeholder={t('contactFormEmailPlaceholder')}
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={getFieldError('email')}
          />
          <Input
            type="textarea"
            name="message"
            label={t('contactFormMessageLabel')}
            placeholder={t('contactFormMessagePlaceholder')}
            required
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={getFieldError('message')}
          />
        </div>
        <button type="submit" disabled={isDisabled}>
          {isSubmitting ? t('sending') : t('contactFormSubmit')}
        </button>
        {submitStatus !== 'idle' && (
          <div
            className={`status ${submitStatus}`.trim()}
            role={submitStatus === 'error' ? 'alert' : 'status'}
          >
            {submitStatus === 'success'
              ? t('contactFormSuccess')
              : t('contactFormError')}
          </div>
        )}
      </div>
    </Form>
  );
};

export default ContactForm;
