import { useCallback, useState } from "react";

export const useAsyncOnce = <T extends Function>(cb: T, dependencies: any[]): [T, boolean] => {
  const [busy, setBusy] = useState(false);

  const callback = useCallback((...props: any[]) => {
    setBusy(true);
    cb(...props)
      .then(() => setBusy(false))
      .catch(() => setBusy(false));
    // eslint-disable-next-line
  }, dependencies);

  return [callback as any, busy];
};
