import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../images/icons/logo.svg';

const Header = ({isAuth, setIsAuth, userEmail}) => {
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);
  const location = useLocation();
  const handleLogout = () => {
    setIsVisibleInfo(false);
    setIsAuth(false);
    localStorage.removeItem('token');
  };
  let button;
  if (location.pathname === '/sign-in') {
    button = (
      <Link className="button header__button" to="/sign-up">
        Регистрация
      </Link>
    );
  } else if (location.pathname === '/sign-up') {
    button = (
      <Link className="button header__button" to="/sign-in">
        Войти
      </Link>
    );
  }
  const onClickBurger = () => {
    setIsVisibleInfo(!isVisibleInfo);
  };
  return (
    <header className={`header ${isVisibleInfo ? 'active' : ''}`}>
      <img src={logo} alt="Логотип сервиса Место" className="header__logo" />
      {isAuth && (
        <>
          <div
            className={`burger ${isVisibleInfo ? 'active' : ''}`}
            onClick={onClickBurger}>
            <span className="burger-line"></span>
          </div>
          <div className={`header__info ${isVisibleInfo ? 'active' : ''}`}>
            <p className="header__mail">{userEmail}</p>
            <p
              className="button header__button header__button_place_info"
              onClick={handleLogout}>
              Выйти
            </p>
          </div>
        </>
      )}
      {button}
    </header>
  );
};

export default Header;
