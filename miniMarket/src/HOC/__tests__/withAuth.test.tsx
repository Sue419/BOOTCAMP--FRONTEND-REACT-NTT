import { render, screen } from '@testing-library/react';
import { withAuth } from '../withAuth';
import { useAuth } from '@/hooks/useAuth';
import { MemoryRouter } from 'react-router-dom';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const MockComponent = () => <div>Component is rendered</div>;
const MockComponentWithAuth = withAuth(MockComponent);

describe('withAuth HOC', () => {
  it('should render the component when there is a token', () => {
    (useAuth as jest.Mock).mockReturnValue({ state: { token: 'fakeToken' } });

    render(
      <MemoryRouter>
        <MockComponentWithAuth />
      </MemoryRouter>
    );

    expect(screen.getByText('Component is rendered')).toBeInTheDocument();
  });

  it('should redirect to login when there is no token', () => {
    (useAuth as jest.Mock).mockReturnValue({ state: { token: null } });

    render(
      <MemoryRouter>
        <MockComponentWithAuth />
      </MemoryRouter>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
