import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useSyncExternalStore } from 'react';

const TIME_ZONE = 'America/Sao_Paulo';
const TICK_MS = 15_000;

const subscribe = (callback: () => void) => {
  const intervalId = window.setInterval(callback, TICK_MS);

  return () => window.clearInterval(intervalId);
};

// Snapshot changes once per tick; the server renders nothing, so the
// static HTML never holds a stale time.
const getSnapshot = () => Math.floor(Date.now() / TICK_MS) * TICK_MS;
const getServerSnapshot = () => null;

const LocalTime = () => {
  const { t } = useTranslation('common');
  const { locale = 'en' } = useRouter();
  const timestamp = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (timestamp === null) {
    return <span aria-hidden="true" />;
  }

  const time = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: TIME_ZONE,
  }).format(timestamp);

  return (
    <span>
      {t('localTime', { time, interpolation: { escapeValue: false } })}
    </span>
  );
};

export default LocalTime;
