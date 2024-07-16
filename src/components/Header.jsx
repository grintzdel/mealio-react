import styles from './Header.module.scss';
import logo from '../assets/images/mealio.svg';

function Header() {
    return (
        <header className={`${styles.header} flex row align-center`}>
            <i className="fa-solid fa-bars mr-15"></i>
            <div className="flex-fill">
                <img src={logo} alt="Logo Mealio"/>
            </div>
            <ul>
                <button className="mr-5 btn btn-primary">
                    <i className="fa-solid fa-basket-shopping mr-5"></i>
                    <span>Panier</span>
                </button>
                <button className="btn btn-secondary">Connexion</button>
            </ul>
        </header>
    );
}

export default Header;
