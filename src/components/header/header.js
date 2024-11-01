import logo from '../../images/Logo.svg';

import classes from './header.module.scss';

function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt="Logo" className={classes['header-logo']} />
    </div>
  );
}

export default Header;
