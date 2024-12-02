import { mapperAuthResponse } from '../mapper/mapperAuth';

describe('mapperAuthResponse', () => {
  it('should map AuthResponse to AuthState correctly', () => {
    const result = mapperAuthResponse({
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
      gender: 'male',
      image: 'test.jpg',
      accessToken: 'fakeToken',
      refreshToken: 'fakeRefreshToken',
    });

    expect(result).toEqual({
      user: {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        image: 'test.jpg',
      },
      token: 'fakeToken',
    });
  });
});
