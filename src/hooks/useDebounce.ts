import { useCallback, useEffect, useRef } from 'react';

export function useDebounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 100,
) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const fnRef = useRef(fn);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      cancel();
      return new Promise<ReturnType<T>>((resolve, reject) => {
        timeoutRef.current = setTimeout(() => {
          const promise = fnRef.current(...args);
          Promise.resolve(promise).then(resolve).catch(reject);
        }, delay);
      });
    },
    [delay, cancel],
  );

  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return {
    debouncedFn,
    cancel,
  };
}
