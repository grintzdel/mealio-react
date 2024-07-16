import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={`${styles.footer} flex row align-center justify-center p-20`}>
            <p>© 2024, Mealio</p>
        </footer>
    );
}

export default Footer;
