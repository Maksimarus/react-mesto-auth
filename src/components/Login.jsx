import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import auth from '../utils/auth';

const Login = ({setIsAuth}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const {token} = await auth.authorize(email, password);
      localStorage.setItem('token', token);
      setIsAuth(true);
      history.push('/');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <form name="form-register" className="register__form" onSubmit={handleSubmit}>
        <h2 className="register__title">Вход</h2>
        <input
          name="email"
          className="register__input"
          type="email"
          id="email-input"
          placeholder="Email"
          required
          minLength="4"
          maxLength="30"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="password"
          className="register__input"
          type="password"
          id="password-input"
          placeholder="Пароль"
          required
          minLength="6"
          maxLength="30"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button register__button" type="submit">
          {isLoading ? 'Загрузка...' : 'Войти'}
        </button>
      </form>
    </div>
  );
};

export default Login;
