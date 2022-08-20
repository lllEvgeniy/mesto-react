
import logo from '../img/Vector.svg';

function Header() {
    return (
<header className="header">
<a className="header__logo" href="#">
  <img className="header__img" src={logo} alt="Логотип Mesto" />
</a>
</header>
  );
}

export default Header;