import blogData from "./blogData.json";
import styles from "./blog.module.css";
import { useState, useRef } from "react";
import { convertMonth } from "../../utils/convertMonth";
import { useNavigate } from "react-router-dom";

export function Blog() {
  const newArticleRef = useRef(null)
  const [articles, setArticles] = useState(blogData);
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    content: "",
  });
  const [addNewFormVals, setAddNewFormVals] = useState({
    title: "",
    author: "",
    content: "",
    date: "",
    id: "",
  });

  const navigate = useNavigate()

  const onValsChange = (e) => {
    setAddNewFormVals((oldVals) => {
      return { ...oldVals, [e.target.name]: e.target.value };
    });
  };

  const oninputFocus = (e) => {
    setErrors((currErrors) => {
      return { ...currErrors, [e.target.name]: "" };
    });
  };

  const onAddNew = (e) => {
    e.preventDefault();
    const currDate = new Date();
    let year = currDate.getFullYear();
    let month = currDate.getMonth();
    let day = currDate.getDate();
    addNewFormVals.date = `${convertMonth(month)} + ${day}, ${year}`;
    addNewFormVals.id = articles.length + 1;

    let errors = checkForErrorsWhenAdding();

    if (Object.entries(errors).some(([key, value]) => value !== "")) {
      setErrors(oldErrors => {return {...errors}})
    } else {
      setArticles((oldArticles) => {
        return [...oldArticles, addNewFormVals];
      });
      setAddNewFormVals((oldVals) => {
        return {
            title: '',
            author: '',
            content: '',
            date: '',
            id: ''
        }    
      })
      newArticleRef.current.scrollIntoView({behavior : 'smooth'})
      newArticleRef.current.classList.add('blink');
      setTimeout(() => {
        newArticleRef.current.classList.remove('blink');
      }, 1000);
    }
  };

  function checkForErrorsWhenAdding() {
    let errorsForProcess = {}
    Object.entries(addNewFormVals).forEach(([key, val]) => {
      if (val === "") {
        errorsForProcess = {...errorsForProcess, [key]: `Field is required !`}
     }
    });
    if (!Object.entries(errorsForProcess).every(([key, value]) => value === "")) {
      Object.entries(addNewFormVals).forEach(([key, val]) => {
        if ((key === "title" && key.length < 5) || key.length > 20) {
            errorsForProcess = {...errorsForProcess,  [key]: `Article title should be between 5 and 20 characters`,}
        } else if ((key === "author" && key.length < 3) || key.length > 20) {
            errorsForProcess = {...errorsForProcess,  [key]: `Author's name should be between 5 and 20 characters`,}
        } else if ((key === "content" && key.length < 10) || key.length > 300) {
            errorsForProcess = {...errorsForProcess,  [key]: `Article's content should be between 10 and 300 characters`,}
        }
      });
    }
    return errorsForProcess
  }

  function onArticleClick(e){
    navigate(`/blog/${e.target.id}`)
  }

  return (
    <section className={styles["blog-section"]}>
      <div className={styles["articles-wrapper"]}>
        <h1>Articles:</h1>
        {articles.map((article, index) => (
          <article 
           key={article.id} 
           id={article.id}
           className={styles["article"]} 
           ref={index === articles.length - 1 ? newArticleRef : null}
           onClick={(e) => onArticleClick(e)}
           >
            <div className={styles["article-title"]}>
              <h1>{article.title}</h1>
            </div>
            <div className={styles["line-divider"]}></div>
            <div className={styles.details}>
              <h3>Published on: {article.date}</h3>
              <h3>Author: {article.author}</h3>
            </div>
          </article>
        ))}
      </div>
      <div className={styles["add-new-article"]}>
        <h1>Create new article:</h1>
        <form className={styles["add-new-form"]} onSubmit={(e) => onAddNew(e)}>
          <fieldset className={styles["add-new-field"]}>
            <input
              className={styles["add-new-input"]}
              type="text"
              name="title"
              id="title"
              onChange={(e) => onValsChange(e)}
              onFocus={(e) => oninputFocus(e)}
              value={addNewFormVals.title}
            />
            <label
              className={
                addNewFormVals.title !== ""
                  ? styles["static"]
                  : styles["add-new-label"]
              }
              htmlFor="title"
            >
              Article Title...
            </label>
            {errors.title && (
              <span className={styles["error-msg"]} id="title-error">
                {errors.title}
              </span>
            )}
          </fieldset>
          <fieldset className={styles["add-new-field"]}>
            <input
              className={styles["add-new-input"]}
              type="text"
              name="author"
              id="author"
              onChange={(e) => onValsChange(e)}
              onFocus={(e) => oninputFocus(e)}
              value={addNewFormVals.author}
            />
            <label
              className={
                addNewFormVals.author !== ""
                  ? styles["static"]
                  : styles["add-new-label"]
              }
              htmlFor="author"
            >
              Article Author...
            </label>
            {errors.author && (
              <span className={styles["error-msg"]} id="author-error">
                {errors.author}
              </span>
            )}
          </fieldset>
          <fieldset className={styles["add-new-field"]}>
            <textarea
              className={styles["add-new-textarea"]}
              name="content"
              id="content"
              onChange={(e) => onValsChange(e)}
              onFocus={(e) => oninputFocus(e)}
              value={addNewFormVals.content}
            ></textarea>
            <label
              className={
                addNewFormVals.content !== ""
                  ? styles["static"]
                  : styles["add-new-label"]
              }
              htmlFor="content"
            >
              Article Content...
            </label>
            {errors.content && (
              <span className={styles["error-msg"]} id="content-error">
                {errors.content}
              </span>
            )}
          </fieldset>
          <button className={styles["submit-new-btn"]}>Submit</button>
        </form>
      </div>
    </section>
  );
}
