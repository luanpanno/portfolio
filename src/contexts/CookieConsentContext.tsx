import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react';

type CookieConsentContextType = {
  hasConsent: boolean;
  hasRejected: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
};

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_CONSENT_CHANGE_EVENT = 'cookie-consent-change';

const subscribeToCookieConsent = (callback: () => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleChange = () => callback();

  window.addEventListener('storage', handleChange);
  window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleChange);
  };
};

const getCookieConsentSnapshot = () => {
  if (typeof window === 'undefined') {
    return 'unknown';
  }

  return localStorage.getItem(COOKIE_CONSENT_KEY) ?? 'unknown';
};

const getServerCookieConsentSnapshot = () => 'unknown';

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const consentValue = useSyncExternalStore(
    subscribeToCookieConsent,
    getCookieConsentSnapshot,
    getServerCookieConsentSnapshot,
  );
  const hasConsent = consentValue === 'true';
  const hasRejected = consentValue === 'false';

  useEffect(() => {
    if (hasConsent && typeof window !== 'undefined' && 'clarity' in window) {
      window.clarity('consent');
    }
  }, [hasConsent]);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGE_EVENT));
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGE_EVENT));
  };

  return (
    <CookieConsentContext.Provider
      value={{
        hasConsent,
        hasRejected,
        acceptCookies,
        rejectCookies,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);

  if (context === undefined) {
    throw new Error(
      'useCookieConsent must be used within a CookieConsentProvider',
    );
  }

  return context;
};
