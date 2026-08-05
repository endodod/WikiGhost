"use client";

import { useCallback, useEffect, useState } from "react";

/** Fired after any push/replace so every hook instance re-syncs, not just the one that wrote. */
const URL_CHANGE_EVENT = "app:urlchange";

function readParams(keys: string[]): Record<string, string | null> {
  if (typeof window === "undefined") return Object.fromEntries(keys.map((k) => [k, null]));
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(keys.map((k) => [k, params.get(k)]));
}

function writeParams(updates: Record<string, string | null>, mode: "push" | "replace") {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(updates)) {
    if (value === null) params.delete(key);
    else params.set(key, value);
  }
  const qs = params.toString();
  const url = qs ? `?${qs}` : window.location.pathname;
  if (mode === "push") window.history.pushState(null, "", url);
  else window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event(URL_CHANGE_EVENT));
}

/**
 * Reads/writes a set of query-string params as shared, history-backed state — so every
 * navigable action (switching tabs, games, guide chapters, opening a detail view, ...)
 * survives reloads/deep-links and the browser back/forward buttons can step through it.
 *
 * `push(updates)` starts a new back-button-undoable history entry.
 * `replace(updates)` updates the current entry in place (no new back-stack step).
 * Both accept any param keys, not just the ones this instance subscribes to — so one
 * call can update several unrelated params (e.g. tab + selection) as a single step.
 * Pass `null` for a key to remove it from the URL.
 */
export function useUrlParams(keys: string[]) {
  const keysKey = keys.join(",");
  // Always start from the SSR-safe (all-null) shape so the client's first render
  // matches the server's, then sync the real URL in an effect after mount — reading
  // `window.location` during the lazy initializer would run on hydration too and
  // diverge from the server-rendered HTML, causing a hydration mismatch.
  const [values, setValues] = useState<Record<string, string | null>>(() =>
    Object.fromEntries(keys.map((k) => [k, null]))
  );
  // Distinguishes "URL genuinely has no value for this key" from "haven't synced the
  // real URL yet" — both look like `null` in `values`. Consumers that branch on the
  // *absence* of a param (e.g. defaulting an active tab) need this to avoid acting on
  // the pre-sync placeholder as if it were the real URL state.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    function sync() {
      setValues(readParams(keysKey.split(",")));
      setHydrated(true);
    }

    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener(URL_CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(URL_CHANGE_EVENT, sync);
    };
  }, [keysKey]);

  const push = useCallback((updates: Record<string, string | null>) => writeParams(updates, "push"), []);
  const replace = useCallback((updates: Record<string, string | null>) => writeParams(updates, "replace"), []);

  return { values, hydrated, push, replace } as const;
}
