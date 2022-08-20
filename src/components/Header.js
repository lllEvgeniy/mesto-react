
import logo from '../img/Vector.svg';

function Header() {
    return (
<header class="header">
<a class="header__logo" href="#">
  <img class="header__img" src={logo} alt="Логотип Mesto" />
</a>
</header>
  );
}

export default Header;