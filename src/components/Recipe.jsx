import styles from './Recipe.module.scss';
import recipe from '../assets/images/plat.webp';

function Recipe() {
    return (
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src={recipe} alt="Recette"/>
            </div>
            <div className={`${styles.recipeTitle} flex row justify-center align-center`}>
                <h3>Plat varié</h3>
            </div>
        </div>
    );
}

export default Recipe;
