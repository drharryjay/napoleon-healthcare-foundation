import React from "react";
import { articles, disclaimer } from "../data/articlesData";

export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="article-card">
      <span>{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <small>{disclaimer}</small>
    </article>
  );
}
