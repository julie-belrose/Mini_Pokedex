import { useState, useEffect } from 'react';

/**
 * Utility function : if initialValue is a function, we execute it,
 * otherwise we return the value as is.
 */
function resolveInitialValue<T>(initialValue: T | (() => T)): T {
  return initialValue instanceof Function
    ? (initialValue as () => T)()
    : initialValue;
}


/**
 * A custom hook that allows storing and automatically synchronizing
 * a React state with localStorage.
 * 
 * @template T - Type of the stored value
 * @param key - Name of the key in localStorage
 * @param initialValue - Default value or function to calculate the initial value
 * @returns A tuple containing the value and a function to modify it
 */
export function useLocalStorageState<T>(
  key: string,                          
  initialValue: T | (() => T)           // valeur par défaut ou fonction qui calcule la valeur initiale
): [T, React.Dispatch<React.SetStateAction<T>>] {

  /**
   * State initialization
   * - We read from localStorage once at mount
   * - If we find something → we parse it and return it
   * - Otherwise → we return the initial value
   */
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key); 

      if (storedValue !== null) {
        const parsedValue = JSON.parse(storedValue) as T;
        return parsedValue;
      }
      // If initialValue is a function, we execute it
      return resolveInitialValue(initialValue);

    } catch {
      // In case of error (corrupted JSON for example), we fall back to initialValue
      return resolveInitialValue(initialValue);
    }
  });

  /**
   * Synchronisation with localStorage
   * - Whenever `value` changes, we save it in localStorage
   */
  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(value); 
      // write in localStorage
      localStorage.setItem(key, serializedValue);    
    } catch (error) {
      console.error(`Failed to save "${key}" to localStorage:`, error);
    }
  }, [key, value]);

  /**
   * Return like useState
   * - `value` = current state
   * - `setValue` = function to modify it
   */
  return [value, setValue];
}