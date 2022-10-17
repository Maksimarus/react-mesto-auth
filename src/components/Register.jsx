import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import auth from '../utils/auth';
import InfoTooltip from './InfoTooltip';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipStatus, setTooltipStatus] = useState(false);
  const history = useHistory();

  const openSuccessTooltip = () => {
    setTooltipStatus(true);
    setIsTooltipOpen(true);
  };
  const openFailTooltip = () => {
    setTooltipStatus(false);
    setIsTooltipOpen(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await auth.register(email, password);
      openSuccessTooltip();
      setTimeout(() => {
        history.push('/sign-in');
      }, 2000);
    } catch (error) {
      console.error(error);
      openFailTooltip();
    } finally {
      setIsLoading(false);
    }
  };
  const closeTooltipPopup = () => {
    setIsTooltipOpen(false);
  };
  return (
    <>
      <InfoTooltip
        status={tooltipStatus}
        isOpen={isTooltipOpen}
        onClose={closeTooltipPopup}
      />
      <div className="register">
        <form name="form-register" className="register__form" onSubmit={handleSubmit}>
          <h2 className="register__title">Регистрация</h2>
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
            {isLoading ? 'Регистрация' : 'Зарегистрироваться'}
          </button>
        </form>
        <Link to="/sign-in" className="register__link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </>
  );
};

export default Register;
