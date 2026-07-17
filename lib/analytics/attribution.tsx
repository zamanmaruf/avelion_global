"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { AttributionData } from "@/types";

const STORAGE_KEY = "avelion_attribution";
const EMPTY_ATTRIBUTION: AttributionData = {};
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function readStored(): AttributionData {
  if (typeof window === "undefined") return EMPTY_ATTRIBUTION;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AttributionData) : EMPTY_ATTRIBUTION;
  } catch {
    return EMPTY_ATTRIBUTION;
  }
}

function captureFromUrl(): AttributionData {
  if (typeof window === "undefined") return EMPTY_ATTRIBUTION;
  const params = new URLSearchParams(window.location.search);
  const data: AttributionData = {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
    landing_page_path: window.location.pathname,
    referring_url: document.referrer || undefined,
  };

  const hasUtm = Boolean(
    data.utm_source || data.utm_medium || data.utm_campaign || data.utm_content || data.utm_term,
  );

  const existing = readStored();
  const merged = hasUtm
    ? { ...existing, ...data }
    : {
        ...data,
        ...existing,
        landing_page_path: existing.landing_page_path || data.landing_page_path,
        referring_url: existing.referring_url || data.referring_url,
      };

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return merged;
}

let cached: AttributionData | null = null;

function getSnapshot(): AttributionData {
  if (cached) return cached;
  cached = captureFromUrl();
  return cached;
}

function getServerSnapshot(): AttributionData {
  return EMPTY_ATTRIBUTION;
}

type AttributionContextValue = {
  attribution: AttributionData;
  setAttribution: (data: Partial<AttributionData>) => void;
};

const AttributionContext = createContext<AttributionContextValue | null>(null);

export function AttributionProvider({ children }: { children: ReactNode }) {
  const attribution = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setAttribution = useCallback((data: Partial<AttributionData>) => {
    const next = { ...getSnapshot(), ...data };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    cached = next;
    emit();
  }, []);

  const value = useMemo(
    () => ({ attribution, setAttribution }),
    [attribution, setAttribution],
  );

  return (
    <AttributionContext.Provider value={value}>{children}</AttributionContext.Provider>
  );
}

export function useAttribution(): AttributionContextValue {
  const ctx = useContext(AttributionContext);
  if (!ctx) {
    return {
      attribution: EMPTY_ATTRIBUTION,
      setAttribution: () => undefined,
    };
  }
  return ctx;
}
