import { useState } from "react";

type UseLocalStorage<T> = {
  storedValue: T;
  setStoredValue: (value: T) => void;
};

export function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorage<T> {
  const [storedValue, setStoredValueState] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  const setStoredValue = (value: T) => {
    try {
      setStoredValueState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };

  return { storedValue, setStoredValue };
}
