import LogoIcon from "../../assets/images/logo.svg";
import CartIcon from "../../assets/images/cart-icon.svg";
import UserIcon from "../../assets/images/user-icon.svg";

import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <img src={LogoIcon} alt="" />
        <nav>
          <ul className="header__list">
            <li>
              <a href="#" className="header__link">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="header__link">
                Brands
              </a>
            </li>
          </ul>
        </nav>
        <input
          type="text"
          placeholder="Search for products..."
          className="header__search__form"
        />
        <div className="header__buttons">
          <img src={CartIcon} alt="" />
          <img src={UserIcon} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
