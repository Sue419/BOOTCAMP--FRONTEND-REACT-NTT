import { fetchAuth } from '../fetchAuth';
import { mapperAuthResponse } from '../mapper/mapperAuth';
import { AuthResponse, AuthErrorResponse } from '@/domain/authReponse';

jest.mock('../mapper/mapperAuth', () => ({
  mapperAuthResponse: jest.fn(),
}));

describe('fetchAuth', () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch;

  const mockAuthResponse: AuthResponse = {
    id: 1,
    username: 'testuser',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User',
    gender: 'male',
    image: 'test.jpg',
    accessToken: 'fakeToken',
    refreshToken: 'fakeRefreshToken',
  };

  const mockMappedResponse = {
    user: {
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      image: 'test.jpg',
    },
    token: 'fakeToken',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return mapped response when login is successful', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockAuthResponse),
    });
    (mapperAuthResponse as jest.Mock).mockReturnValue(mockMappedResponse);

    const result = await fetchAuth('testuser', 'password');
    expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'testuser', password: 'password' }),
    });
    expect(mapperAuthResponse).toHaveBeenCalledWith(mockAuthResponse);
    expect(result).toEqual(mockMappedResponse);
  });

  it('should throw an error with message when login fails', async () => {
    const mockErrorResponse: AuthErrorResponse = { message: 'Invalid credentials' };

    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValueOnce(mockErrorResponse),
    });

    await expect(fetchAuth('testuser', 'wrongpassword')).rejects.toThrow('Invalid credentials');
    expect(mockFetch).toHaveBeenCalledWith('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'testuser', password: 'wrongpassword' }),
    });
  });

});
