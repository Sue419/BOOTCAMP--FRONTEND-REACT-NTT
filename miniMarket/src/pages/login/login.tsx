import { FC, useState } from 'react';
import { Button } from '@/components/shared/button/button';
import Input from '@/components/shared/input/input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { validateLoginForm, handleLoginRequest } from '@/logic/validateLoginForm';
import { emailRegex } from '@/constants/regexValidators';
import { AppRoutes } from '@/constants/routes';
import Modal from '@/components/shared/modal/modal';
import './login.css'

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
          type: 'LOGIN_SUCCESS',
          payload: { user: response.user, token: response.token },
        });
        navigate(AppRoutes.Home);
      } else {
        setErrorMessage('Invalid username or password, please try again.');
      }
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  };

  const handleResetPassword = () => {
    if (!email.match(emailRegex)) {
      setResetErrorMessage('Please enter a valid email address.');
      return;
    }

    openSuccessModal();
    setResetErrorMessage('');
    setEmail('');
    closeResetModal();
  };

  return (
    <div className="login">
      <div className="login__logo">
          <img src="./src/assets/images/logo/white_logo.svg" alt="Logo de My Market" />
          <h1 className='login__logo__title'>My Market</h1>
      </div>
      <h2 className="login__title">Login</h2>
      <form className="login__form" onSubmit={handleLogin}>
        <Input
          id="username"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          errorMessage={errorUsername}
          className="login__input"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errorPassword}
          className="login__input"
        />
        {errorMessage && <p className="login__error-message">{errorMessage}</p>}
        <Button onClick={handleLogin} className="login__button" role="submit">
          Login
        </Button>
      </form>
      <div className="login__forgot-password">
        <a href="#" onClick={openResetModal}>
          Forgot Password?
        </a>
      </div>

      <Modal isVisible={showResetModal} onClose={closeResetModal} title="Reset Password">
        <input
          className="login__reset-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="login__reset-button" onClick={handleResetPassword}>
          Send Reset Link
        </button>
        {resetErrorMessage && <p className="login__error-message">{resetErrorMessage}</p>}
      </Modal>

      <Modal isVisible={showSuccessModal} onClose={closeSuccessModal} title="Password Reset Sent">
        <p>The information was sent to the entered email.</p>
      </Modal>
    </div>
  );
};

export default LoginPage;
