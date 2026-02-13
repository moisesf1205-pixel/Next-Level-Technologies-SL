import { useState, useCallback } from "react";

export type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: unknown;
};

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((t: Omit<Toast, "id">) => {
    const id = String(Date.now()) + Math.random().toString(16).slice(2);
    setToasts((s) => [...s, { id, ...t }]);
    return id;
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  return { toasts, toast, remove } as const;
}

export const toast = {
  success: (t: Omit<Toast, "id">) => {
    // placeholder: consumer can use `useToast()` for stateful toasts
    // this file only provides types and a minimal runtime hook.
    return;
  },
};

export default useToast;
