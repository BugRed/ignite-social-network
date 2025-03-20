//importando module.css
import styles from "./Header.module.css";

//importando logo
import igniteLogo from '../../assets/Ignite-logo.svg'

export function Header() {
  return (
    /* utilizando module.css como className */
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
