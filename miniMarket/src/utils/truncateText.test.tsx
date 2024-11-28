import { truncateText } from './truncateText';

describe('truncateText', () => {
  it('should truncate text and add "..." if longer than maxLength', () => {
    expect(truncateText('Hello, this is My Market!', 5)).toBe('Hello...');
  });

  it('should not truncate text if it is shorter than maxLength', () => {
    expect(truncateText('Hello, this is My Market!', 25)).toBe('Hello, this is My Market!');
  });
});
