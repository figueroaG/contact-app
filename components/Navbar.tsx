import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <nav className={styles.nabLinks}>
                <Link href="/">Overview</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/favorites">Favorites</Link>
            </nav>
            <button className={styles.newButton}>New</button>
        </header>
    );
}