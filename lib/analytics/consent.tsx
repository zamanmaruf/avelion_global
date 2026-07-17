"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
};

type ConsentContextValue = {
  consent: ConsentState;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: { analytics: boolean; marketing: boolean }) => void;
};

const STORAGE_KEY = "avelion_cookie_consent";
const listeners = new Set<() => void>();

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false,
};

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function loadConsent(): ConsentState {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return defaultConsent;
  }
}

let cachedConsent: ConsentState | null = null;

function getSnapshot(): ConsentState {
  if (cachedConsent) return cachedConsent;
  cachedConsent = loadConsent();
  return cachedConsent;
}

function getServerSnapshot(): ConsentState {
  return defaultConsent;
}

function writeConsent(next: ConsentState) {
  cachedConsent = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  emit();
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const acceptAll = useCallback(() => {
    writeConsent({ necessary: true, analytics: true, marketing: true, decided: true });
  }, []);

  const rejectNonEssential = useCallback(() => {
    writeConsent({ necessary: true, analytics: false, marketing: false, decided: true });
  }, []);

  const savePreferences = useCallback(
    ({ analytics, marketing }: { analytics: boolean; marketing: boolean }) => {
      writeConsent({ necessary: true, analytics, marketing, decided: true });
    },
    [],
  );

  const value = useMemo(
    () => ({ consent, acceptAll, rejectNonEssential, savePreferences }),
    [consent, acceptAll, rejectNonEssential, savePreferences],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    return {
      consent: defaultConsent,
      acceptAll: () => undefined,
      rejectNonEssential: () => undefined,
      savePreferences: () => undefined,
    };
  }
  return ctx;
}
