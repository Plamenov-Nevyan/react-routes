import { Link } from "react-router-dom"
import { useState } from "react"
import styles from "./contacts.module.css"

export function Contacts(){
    const [formVals, setFormVals] = useState({
        yourName: '',
        yourEmail: '',
        subject: 'question',
        message: ''
    })

    const onValsChange = (e) => {
        setFormVals(oldVals => {
            return {...oldVals, [e.target.name] : e.target.value }
        })
    }
    return (
        <section className={styles["contacts-section"]}>
            <div className={styles.wrapper}>
                <div className={styles["contacts-form-container"]}>
                    <form className={styles["contacts-form"]}>
                        <fieldset className={styles["input-contacts"]}>
                            <input 
                                type="text" 
                                name="yourName" 
                                className={styles["contacts-input"]}
                                onChange={(e) => onValsChange(e)}
                                value={formVals.yourName}
                            />
                            <label 
                                htmlFor="yourName"
                                className={
                                    formVals.yourName !== ""
                                      ? styles["static"]
                                      : styles["contacts-label"]
                                  }
                            >
                                Your Name...
                            </label>
                            <span className={styles["error-msg"]}></span>
                        </fieldset>
                        <fieldset className={styles["input-contacts"]}>
                            <input 
                                type="text" 
                                name="yourEmail"
                                className={styles["contacts-input"]}
                                onChange={(e) => onValsChange(e)}
                                value={formVals.yourEmail}
                             />
                            <label 
                                htmlFor="yourEmail"
                                className={
                                    formVals.yourEmail !== ""
                                      ? styles["static"]
                                      : styles["contacts-label"]
                                  }
                            >
                                Your Email Adress...
                            </label>
                            <span className={styles["error-msg"]}></span>
                        </fieldset>
                        <fieldset id={styles["subject-field"]}>
                            <label htmlFor="subject">Subject:</label>
                            <select 
                                name="subject" 
                                className={styles.subject}
                                onChange={(e) => onValsChange(e)}
                                value={formVals.subject}
                            >
                                <option value="question">I have a question.</option>
                                <option value="help">I need help.</option>
                                <option value="chat">I just want to chat.</option>
                            </select>
                        </fieldset>
                        <fieldset className={styles["input-contacts"]}>
                            <textarea 
                                name="message" 
                                className={styles.message}
                                onChange={(e) => onValsChange(e)}
                                value={formVals.message}
                            ></textarea>
                            <label 
                                htmlFor="message"
                                className={
                                    formVals.message !== ""
                                      ? styles["static"]
                                      : styles["contacts-label"]
                                  }
                            >
                                Message...
                            </label>
                        </fieldset>
                    </form>
                </div>
                <div className={styles["outer-links"]}>
                    <h1>You can find us on: </h1>
                    <ul>
                        <li>
                            <a href="https://facebook.com">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                Youtube
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg> 
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            <p>alabala@gmail.com</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            <p>0892039954</p>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                            <p>Anywhere City, Some Country</p>
                            <span>That Street, №: 224</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}