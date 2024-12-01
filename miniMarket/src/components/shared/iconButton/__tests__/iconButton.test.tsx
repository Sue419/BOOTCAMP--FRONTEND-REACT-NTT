import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from '../iconButton';

describe('IconButton', () => {
  it('should render the button with an icon', () => {
    render(<IconButton icon="icon.png" alt="icon" />);

    const button = screen.getByRole('button');
    const image = screen.getByAltText('icon');

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'icon.png');
  });

  it('should call onClick when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<IconButton icon="icon.png" alt="icon" onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render children inside the button', () => {
    render(
      <IconButton icon="icon.png" alt="icon">
        <span>Click me!</span>
      </IconButton>
    );

    const button = screen.getByRole('button');
    const children = screen.getByText('Click me!');

    expect(button).toContainElement(children);
  });

  it('should apply the passed className to the button', () => {
    render(<IconButton icon="icon.png" alt="icon" className="custom-class" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should apply default className "icon-btn" to the button', () => {
    render(<IconButton icon="icon.png" alt="icon" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('icon-btn');
  });
});
