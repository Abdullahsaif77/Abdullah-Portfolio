"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true, // client snapshot
    () => false, // server snapshot
  );

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="size-10 rounded-full border border-border"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group inline-flex size-10 items-center justify-center
        rounded-full border border-border bg-card text-foreground
        transition-all duration-300 hover:-translate-y-0.5
        hover:border-primary hover:text-primary"
    >
      {isDark ? (
        <Sun
          size={17}
          className="transition-transform duration-500
            group-hover:rotate-90"
        />
      ) : (
        <Moon
          size={17}
          className="transition-transform duration-500
            group-hover:-rotate-12"
        />
      )}
    </button>
  );
}
