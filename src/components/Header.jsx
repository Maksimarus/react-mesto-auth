import logo from '../images/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сервиса Место" className="header__logo" />
    </header>
  );
};

export default Header;
