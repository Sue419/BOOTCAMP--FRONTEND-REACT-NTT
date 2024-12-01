import { renderHook } from '@testing-library/react';
import useResponsive from '../useResponsive';

describe('useResponsive', () => {
  it('should return true for mobile screen size', () => {
    global.innerWidth = 500;
    const { result } = renderHook(() => useResponsive());

    expect(result.current).toBe(true);
  });

  it('should return false for non-mobile screen size', () => {
    global.innerWidth = 1024;
    const { result } = renderHook(() => useResponsive());

    expect(result.current).toBe(false);
  });
});
