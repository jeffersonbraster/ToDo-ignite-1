import styles from "./Header.module.css";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <img
          className={styles.logoImg}
          src={logo}
          alt="Logo de um foguete e com o nome to do ao lado"
        />
      </div>
    </header>
  );
};

export default Header;
