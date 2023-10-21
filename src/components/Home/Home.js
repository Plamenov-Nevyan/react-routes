import {SideNavigation} from "../SideNavigation/SideNavigation";
import { useState } from "react";

export function Home(){
    const [calcNum1, setCalcNum1] = useState(0)
    const [calcNum2, setCalcNum2] = useState(0)
    const [calcResult, setCalcResult] = useState(0)

    return(
        <section className="home-section">
            <SideNavigation />
            <div class="calculator">
                <span class="error-message"></span>
                <section class="calculator-top">
                    <input type="text" name="operation" id="operation" disabled/>
                </section>
                <section class="calculator-bottom">
                    <div class="number-buttons">
                        <div class="button-container">
                            <button class="number-btn" id="1">1</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="2">2</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="3">3</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="4">4</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="5">5</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="6">6</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="7">7</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="8">8</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="9">9</button>
                        </div>
                        
                        <div class="button-container">
                            <button class="number-btn" id="0">0</button>
                        </div>
                        <div class="button-container">
                            <button id="float">.</button>
                        </div>
                        <div class="button-container">
                            <button id="equals">=</button>
                        </div>
                    </div>
                    <div class="operator-buttons">
                        <div class="operator-container">
                            <button class="operator-btn" id="divide">/</button>
                        </div>
                        <div class="operator-container">
                            <button class="operator-btn" id="multiply">*</button>
                        </div>
                        <div class="operator-container">
                            <button class="operator-btn" id="substract">-</button>
                        </div>
                        <div class="operator-container">
                            <button class="operator-btn" id="add">+</button>
                        </div>
                        <div class="operator-container">
                            <button class="operator-btn" id="modular">%</button>
                        </div>
                        <div class="operator-container">
                            <button class="operator-btn" id="clear-input">CE</button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}