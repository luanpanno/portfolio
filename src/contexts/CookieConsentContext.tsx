import { createContext, useContext, useEffect, useState } from 'react';

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

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [hasRejected, setHasRejected] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setHasConsent(localStorage.getItem(COOKIE_CONSENT_KEY) === 'true');
  }, []);

  useEffect(() => {
    if (hasConsent && typeof window !== 'undefined' && 'clarity' in window) {
      window.clarity('consent');
    }
  }, [hasConsent]);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setHasConsent(true);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    setHasConsent(false);
    setHasRejected(true);
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
