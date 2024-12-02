import { FC, useState } from 'react';
import { Button } from '@/components/shared/button/button';
import { useNavigate } from 'react-router-dom';
import { login } from '@/proxy/auth';
import { AppRoutes } from '@/constants/routes';

const LoginPage: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(username, password);
      
      if (response.token) {
        sessionStorage.setItem('authToken', response.token);
        navigate(AppRoutes.Home);
      }
    } catch {
      setErrorMessage('Error de autenticación, por favor intenta de nuevo.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <Button onClick={handleLogin} className="btn-submit" type="submit" role="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
