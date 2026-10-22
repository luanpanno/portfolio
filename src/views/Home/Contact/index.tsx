import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

import Section from '@components/Section';

import { links } from '@utils/links';

import ContactForm from './Form';
import { Email, Lead } from './styles';

const Contact = () => {
  const { t } = useTranslation('common');
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
    } catch {
      return;
    }

    setIsCopied(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Section id="contact" title={t('titleContact')}>
      <Lead>{t('contactLead')}</Lead>

      <Email>
        <a href={`mailto:${links.email}`}>{links.email}</a>
        <button type="button" onClick={copyEmail}>
          {isCopied ? t('emailCopied') : t('copyEmail')}
        </button>
        <span className="visually-hidden" role="status">
          {isCopied ? t('emailCopiedAnnouncement') : ''}
        </span>
      </Email>

      <ContactForm />
    </Section>
  );
};

export default Contact;
