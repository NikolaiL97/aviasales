import logo from '../../images/Logo.svg';

import classes from './header.module.scss';

function Header() {
  return (
    <div className={classes.header}>
      <a href="#/" className={classes.headerRef}>
        <img src={logo} alt="Logo" className={classes.headerLogo} />
      </a>
    </div>
  );
}

export default Header;
