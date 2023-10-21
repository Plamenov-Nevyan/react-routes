import {SideNavigation} from "../SideNavigation/SideNavigation";
import styles from "./home.module.css"
import { useState } from "react";

export function Home(){
    const [calcNum1, setCalcNum1] = useState(0)
    const [calcNum2, setCalcNum2] = useState(0)
    const [calcResult, setCalcResult] = useState(0)

    return(
        <section className={styles["home-section"]}>
            <SideNavigation />
            <div className={styles.calculator}>
                <span className={styles["error-message"]}></span>
                <section className={styles["calculator-top"]}>
                    <input type="text" name="operation" id="operation" disabled/>
                </section>
                <section className={styles["calculator-bottom"]}>
                    <div className={styles["number-buttons"]}>
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="1">1</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="2">2</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="3">3</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="4">4</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="5">5</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="6">6</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="7">7</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="8">8</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="9">9</button>
                        </div>
                        
                        <div className={styles["button-container"]}>
                            <button className={styles["number-btn"]} id="0">0</button>
                        </div>
                        <div className={styles["button-container"]}>
                            <button id="float">.</button>
                        </div>
                        <div className={styles["button-container"]}>
                            <button id="equals">=</button>
                        </div>
                    </div>
                    <div className={styles["operator-buttons"]}>
                        <div className={styles["operator-container"]}>
                            <button className={styles["operator-btn"]} id="divide">/</button>
                        </div>
                        <div  className={styles["operator-container"]}>
                            <button className={styles["operator-btn"]} id="multiply">*</button>
                        </div>
                        <div  className={styles["operator-container"]}>
                            <button className={styles["operator-btn"]} id="substract">-</button>
                        </div>
                        <div  className={styles["operator-container"]}>
                            <button className={styles["operator-btn"]} id="add">+</button>
                        </div>
                        <div  className={styles["operator-container"]}>
                            <button className={styles["operator-btn"]} id="modular">%</button>
                        </div>
                        <div  className={styles["operator-container"]}>
                            <button className={styles["operator-btn"]} id="clear-input">CE</button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}