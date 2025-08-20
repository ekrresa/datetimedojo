"use client";

import * as React from "react";

export type Theme = "light" | "dark" | null;

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeState | undefined>(undefined);

type ThemeProviderProps = React.PropsWithChildren<{}>;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(null);

  // Initialize theme
  useLayoutEffect(() => {
    const persistedState = localStorage.getItem("app-theme");

    if (
      persistedState === "dark" ||
      (!persistedState &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const onDarkModeChange = (evt: MediaQueryListEvent) => {
      if (evt.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    mq.addEventListener("change", onDarkModeChange);

    return () => {
      mq.removeEventListener("change", onDarkModeChange);
    };
  }, []);

  // Synchronize theme changes to window & localStorage
  React.useEffect(() => {
    if (!theme) return;

    const root = window.document.documentElement;
    const isDark = theme === "dark";

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = React.useCallback(
    () => setTheme((theme) => (theme === "light" ? "dark" : "light")),
    []
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}

declare const window: any;

const useLayoutEffect =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
    ? React.useLayoutEffect
    : React.useEffect;
