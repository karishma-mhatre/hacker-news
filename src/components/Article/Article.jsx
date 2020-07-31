import React from 'react';
import './article.css';

const Article = (props) => {
    const { article } = props;
    const { title, score, time: created_at } = article;
    const formatDate = (date) => {
        const dateObj = new Date(date * 1000);
        return dateObj.toLocaleString();
    }
    return (
        <div class="article" >
            <div className="article-date">{formatDate(created_at)}</div>
            <a href={article.url} target="__blank" className="article-title">{title}</a>
            <div class="score"><i className="fa fa-heart"/>{score}</div>
        </div>
    );
}

export default Article;