import { FC, useState } from 'react';
import { Button } from '@/components/shared/button/button';
import Input from '@/components/shared/input/input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { validateLoginForm, handleLoginRequest } from '@/logic/validateLoginForm';
import { emailRegex } from '@/constants/regexValidators';
import { AppRoutes } from '@/constants/routes';

const LoginPage: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [resetErrorMessage, setResetErrorMessage] = useState('');

  const { isModalVisible: showResetModal, openModal: openResetModal, closeModal: closeResetModal } = useModal();
  const { isModalVisible: showSuccessModal, openModal: openSuccessModal, closeModal: closeSuccessModal } = useModal();

  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorUsername('');
    setErrorPassword('');
    setErrorMessage('');

    const { valid, usernameError, passwordError } = validateLoginForm(username, password);

    if (!valid) {
      setErrorUsername(usernameError);
      setErrorPassword(passwordError);
      return;
    }

    try {
      const response = await handleLoginRequest(username, password);

      if (response && response.token) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user: response.user, token: response.token },
        });
        navigate(AppRoutes.Home);
      } else {
        setErrorMessage("Invalid username or password, please try again.");
      }
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    }
  };

  const handleResetPassword = () => {
    if (!email.match(emailRegex)) {
      setResetErrorMessage("Please enter a valid email address.");
      return;
    }

    openSuccessModal();
    setResetErrorMessage('');
    setEmail('');
    closeResetModal();
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          errorMessage={errorUsername}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errorPassword}
        />
        {errorMessage && <p>{errorMessage}</p>}
        <Button onClick={handleLogin} className="btn-submit" role="submit">
          Login
        </Button>
      </form>
      <div>
        <a href="#" onClick={openResetModal}>
          Forgot Password?
        </a>
      </div>

      {/* Primer Modal: Ingreso de correo */}
      {showResetModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Reset Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleResetPassword}>Send Reset Link</button>
            <button onClick={closeResetModal}>Cancel</button>

            {resetErrorMessage && <p className="error-message">{resetErrorMessage}</p>}
          </div>
        </div>
      )}

      {/* Segundo Modal: Mensaje de éxito */}
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Password Reset Request Sent</h2>
            <p>Se envió la información al correo ingresado.</p>
            <button onClick={closeSuccessModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
