import {Link, useLocation} from 'react-router-dom';
import logo from '../images/icons/logo.svg';

const Header = ({isAuth, setIsAuth, userEmail}) => {
  const location = useLocation();
  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('token');
  };
  let button;
  if (location.pathname === '/sign-in') {
    button = (
      <Link className="button header__button" to="sign-up">
        Регистрация
      </Link>
    );
  } else if (location.pathname === '/sign-up') {
    button = (
      <Link className="button header__button" to="sign-in">
        Войти
      </Link>
    );
  }
  return (
    <header className="header">
      <img src={logo} alt="Логотип сервиса Место" className="header__logo" />
      {isAuth && (
        <div className="header__info">
          <p className="header__mail">{userEmail}</p>
          <p
            className="button header__button header__button_place_info"
            onClick={handleLogout}>
            Выйти
          </p>
        </div>
      )}
      {button}
    </header>
  );
};

export default Header;
