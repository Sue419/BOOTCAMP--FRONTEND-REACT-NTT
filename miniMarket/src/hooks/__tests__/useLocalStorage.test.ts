import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  it('should set and get value from localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    expect(result.current.storedValue).toBe('initialValue');

    act(() => {
      result.current.setStoredValue('newValue');
    });

    expect(result.current.storedValue).toBe('newValue');
    expect(window.localStorage.getItem('testKey')).toBe('"newValue"');
  });
});
