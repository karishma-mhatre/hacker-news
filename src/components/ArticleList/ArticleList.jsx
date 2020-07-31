import React from 'react';
import { fetchTopArticles, sortArticles } from '../../actions';
import  { connect } from "react-redux";
import Search from '../Search/Search';
import Article from '../Article/Article';
import Sort from '../Sort/Sort';
import './asrticle-list.css';

class ArticleList extends React.Component {
    componentDidMount () {
        this.props.dispatch(fetchTopArticles());
    }

    sortArticles = (e) => {
        this.props.dispatch(sortArticles(e.target.value));
    }

    render () {
        const { isLoading, articles } = this.props;
        return (
            <div className="article-list">
                {
                    !isLoading  && <div className="tool-bar">
                        <Search />
                        <Sort />
                    </div>
                }
                {
                    !isLoading && articles ?
                        articles.map(article => {
                            return <Article key={article.id} article={article} />
                        }) : <div className="loader"></div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    articles: state.articleList.articles,
    isLoading: state.articleList.isLoadingArticles,
    sortOption: state.articleList.sortOption
});

export default connect(mapStateToProps)(ArticleList);