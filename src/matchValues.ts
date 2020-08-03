import React from "react";

export function matchValues<T extends keyof any>(
  value: T,
  match: { [V in T]: () => React.ReactElement },
  defaultValue?: React.ReactElement,
) {
  if (value in match) {
    return match[value]();
  }
  return defaultValue || null;
}
