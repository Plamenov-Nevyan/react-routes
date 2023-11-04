import notFoundImg from "./404.png"
import styles from "./notFound.module.css"

export function NotFound(){


    return (
        <section className={styles["not-found-section"]}>
            <img src={notFoundImg} alt="404 image"/>
            <h1>Woops... the page requested was not found</h1>
        </section>
    )
}