import styles from "./home.module.css";
import { useState } from "react";

export function Home() {
  const [calcOperation, setCalcOperation] = useState("");
  const [errors, setErrors] = useState([]);

  const onNumBtnPress = (e) => {
    if (errors.length > 0) {
      setErrors((oldVal) => []);
    }
    setCalcOperation((currentOperation) => (currentOperation += e.target.id));
  };

  const onOperatorBtnPress = (e) => {
    switch (e.target.id) {
      case "add":
        setCalcOperation((currentOperation) => (currentOperation += " + "));
        break;
      case "substract":
        setCalcOperation((currentOperation) => (currentOperation += " - "));
        break;
      case "multiply":
        setCalcOperation((currentOperation) => (currentOperation += " * "));
        break;
      case "divide":
        setCalcOperation((currentOperation) => (currentOperation += " / "));
        break;
      case "modular":
        setCalcOperation((currentOperation) => (currentOperation += " % "));
        break;
      case "clear-input":
        if (calcOperation.length > 0) {
          setCalcOperation((currentOperation) =>
            currentOperation.slice(0, currentOperation.length - 1)
          );
        }
        break;
    }
  };

  const onCalculateOperation = () => {
    let operation = calcOperation.trim().split(" ");
    let [num1, operand, num2] = [operation[0], operation[1], operation[2]];
    let errorsForProcess = checkForErrors();
    if (errorsForProcess.length > 0) {
      return setErrors((oldErrors) => [...errorsForProcess]);
    }
    let result;
    switch (operand) {
      case "+":
        result = Number(num1) + Number(num2);
        setCalcOperation((oldOperation) => result.toString());
        break;
      case "-":
        if (Number(num1) < Number(num2)) {
          result = Number(num2) - Number(num1);
        } else {
          result = Number(num1) - Number(num2);
        }
        setCalcOperation((oldOperation) => result.toString());
        break;
      case "*":
        result = Number(num1) * Number(num2);
        setCalcOperation((oldOperation) => result.toString());
        break;
      case "/":
        result = Number(num1) / Number(num2);
        setCalcOperation((oldOperation) => result.toString());
        break;
      case "%":
        result = Number(num1) % Number(num2);
        setCalcOperation((oldOperation) => result.toString());
        break;
    }
  };

  const checkForErrors = () => {
    let errorsForProcess = [];
    if (calcOperation.length <= 0) {
      errorsForProcess.push("Please select numbers and operator!");
      return errorsForProcess;
    }
    let operationForProcess = calcOperation.trim().split(" ").join("");
    if (
      !operationForProcess.includes("+") &&
      !operationForProcess.includes("-") &&
      !operationForProcess.includes("*") &&
      !operationForProcess.includes("/") &&
      !operationForProcess.includes("%")
    ) {
      errorsForProcess.push("Please select an operator!");
      return errorsForProcess;
    } else if (
      (operationForProcess.includes("+") &&
        operationForProcess.split("").indexOf("+") - 1 < 0) ||
      (operationForProcess.includes("-") &&
        operationForProcess.split("").indexOf("-") - 1 < 0) ||
      (operationForProcess.includes("*") &&
        operationForProcess.split("").indexOf("*") - 1 < 0) ||
      (operationForProcess.includes("/") &&
        operationForProcess.split("").indexOf("/") - 1 < 0) ||
      (operationForProcess.includes("%") &&
        operationForProcess.split("").indexOf("%") - 1 < 0)
    ) {
      errorsForProcess.push("Please enter your first number !");
      return errorsForProcess;
    } else if (
      (operationForProcess.includes("+") &&
        operationForProcess.split("").indexOf("+") + 1 >=
          operationForProcess.length) ||
      (operationForProcess.includes("-") &&
        operationForProcess.split("").indexOf("-") + 1 >=
          operationForProcess.length) ||
      (operationForProcess.includes("*") &&
        operationForProcess.split("").indexOf("*") + 1 >=
          operationForProcess.length) ||
      (operationForProcess.includes("/") &&
        operationForProcess.split("").indexOf("/") + 1 >=
          operationForProcess.length) ||
      (operationForProcess.includes("%") &&
        operationForProcess.split("").indexOf("%") + 1 >=
          operationForProcess.length)
    ) {
      errorsForProcess.push("Please enter your second number !");
      return errorsForProcess;
    }
    let operation = calcOperation.trim().split(" ");
    let [num1, operand, num2] = [operation[0], operation[1], operation[2]];
    if (num1.includes(".")) {
      let num1Dispersed = num1.split("");
      let floatIndex = num1Dispersed.indexOf(".");
      if (floatIndex - 1 < 0 || floatIndex + 1 > num1Dispersed.length) {
        errorsForProcess.push("Your first number is invalid float number!");
      }
    }
    if (num2.includes(".")) {
      let num2Dispersed = num2.split("");
      let floatIndex = num2Dispersed.indexOf(".");
      if (floatIndex - 1 < 0 || floatIndex + 1 >= num2Dispersed.length) {
        errorsForProcess.push("Your second number is invalid float number!");
      }
    }
    return errorsForProcess;
  };

  return (
    <section className={styles["home-section"]}>
      <div className={styles.calculator}>
        {errors.length > 0 &&
          errors.map((error, index) => (
            <span key={index} className={styles["error-message"]}>
              {error}
            </span>
          ))}
        <section className={styles["calculator-top"]}>
          <input
            type="text"
            name="operation"
            id="operation"
            disabled
            value={calcOperation}
          />
        </section>
        <section className={styles["calculator-bottom"]}>
          <div className={styles["number-buttons"]}>
            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="1"
                onClick={(e) => onNumBtnPress(e)}
              >
                1
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="2"
                onClick={(e) => onNumBtnPress(e)}
              >
                2
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="3"
                onClick={(e) => onNumBtnPress(e)}
              >
                3
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="4"
                onClick={(e) => onNumBtnPress(e)}
              >
                4
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="5"
                onClick={(e) => onNumBtnPress(e)}
              >
                5
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="6"
                onClick={(e) => onNumBtnPress(e)}
              >
                6
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="7"
                onClick={(e) => onNumBtnPress(e)}
              >
                7
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="8"
                onClick={(e) => onNumBtnPress(e)}
              >
                8
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="9"
                onClick={(e) => onNumBtnPress(e)}
              >
                9
              </button>
            </div>

            <div className={styles["button-container"]}>
              <button
                className={styles["number-btn"]}
                id="0"
                onClick={(e) => onNumBtnPress(e)}
              >
                0
              </button>
            </div>
            <div className={styles["button-container"]}>
              <button
                className="float"
                id="."
                onClick={(e) => onNumBtnPress(e)}
              >
                .
              </button>
            </div>
            <div className={styles["button-container"]}>
              <button
                className="equals"
                id="="
                onClick={() => onCalculateOperation()}
              >
                =
              </button>
            </div>
          </div>
          <div className={styles["operator-buttons"]}>
            <div className={styles["operator-container"]}>
              <button
                className={styles["operator-btn"]}
                id="divide"
                onClick={(e) => onOperatorBtnPress(e)}
              >
                /
              </button>
            </div>
            <div className={styles["operator-container"]}>
              <button
                className={styles["operator-btn"]}
                id="multiply"
                onClick={(e) => onOperatorBtnPress(e)}
              >
                *
              </button>
            </div>
            <div className={styles["operator-container"]}>
              <button
                className={styles["operator-btn"]}
                id="substract"
                onClick={(e) => onOperatorBtnPress(e)}
              >
                -
              </button>
            </div>
            <div className={styles["operator-container"]}>
              <button
                className={styles["operator-btn"]}
                id="add"
                onClick={(e) => onOperatorBtnPress(e)}
              >
                +
              </button>
            </div>
            <div className={styles["operator-container"]}>
              <button
                className={styles["operator-btn"]}
                id="modular"
                onClick={(e) => onOperatorBtnPress(e)}
              >
                %
              </button>
            </div>
            <div className={styles["operator-container"]}>
              <button
                className={styles["operator-btn"]}
                id="clear-input"
                onClick={(e) => onOperatorBtnPress(e)}
              >
                CE
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
