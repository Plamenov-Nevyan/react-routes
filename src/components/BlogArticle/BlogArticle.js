import { useParams } from "react-router-dom";
import { useState } from "react";
import blogData from "../Blog/blogData.json";
import styles from "./blogArticle.module.css";

export function BlogArticle() {
  const { blogId } = useParams();
  const [article, setArticle] = useState(
    blogData.find((article) => article.id === Number(blogId) || null)
  );

  return (
    <div className={styles["article-wrapper"]}>
      {article ? (
        <>
          <div className={styles.title}>
            <h1>{article.title}</h1>
          </div>
          <div className={styles.content}>
            <p>{article.content}</p>
          </div>
          <div className={styles.details}>
            <h3 className={styles.date}>Published on: {article.date}</h3>
            <h3 className={styles.author}>Author: {article.author}</h3>
          </div>
        </>
      ) : (
        <h1>Sorry, article data couldn't be retrieved...</h1>
      )}
    </div>
  );
}
