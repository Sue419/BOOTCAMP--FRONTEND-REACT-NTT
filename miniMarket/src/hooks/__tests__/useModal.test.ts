import { renderHook, act } from '@testing-library/react';
import { useModal } from '../useModal';

describe('useModal', () => {
  it('should handle modal state', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isModalVisible).toBe(false);

    act(() => {
      result.current.openModal();
    });
    expect(result.current.isModalVisible).toBe(true);

    act(() => {
      result.current.closeModal();
    });
    expect(result.current.isModalVisible).toBe(false);
  });
});
