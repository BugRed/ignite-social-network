//importando module.css
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* utilizando module.css como className */}
      <strong>Ignite Feed</strong>
    </header>
  );
}
