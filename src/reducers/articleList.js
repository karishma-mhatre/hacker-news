import  { REQUEST_ARTICLES, RECEIVE_ARTICLES, SEARCH_ARTICLES, SORT_ARTICLES } from '../actions';
import { sortArticles } from '../helpers/utils'

import { combineReducers } from 'redux';

let articleStore = {
    isLoadingArticles: false,
    sortOption: "Score - High to Low",
    articles: []
}

const articleList = (state = articleStore, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return {
                ...state,
                isLoadingArticles: true
            }
        case RECEIVE_ARTICLES:
            return {
                ...state,
                isLoadingArticles: false,
                articles: sortArticles(action.articles, state.sortOption)
            }
        case SEARCH_ARTICLES:
            const searchString = action.searchString;
            const allArticles = JSON.parse(localStorage.getItem("articles"));
            if (!searchString || searchString === "") {
                return {
                    ...state,
                    articles: sortArticles(allArticles, state.sortOption)
                }
            } else {
                const filteredArticles = allArticles.filter((article) => article.title.includes(searchString));
                return {
                    ...state,
                    articles: filteredArticles
                }
            }
        case SORT_ARTICLES:
            const sortOption = action.sortOption;
            let sortedArticles = Object.assign(state.articles);
            return {
                ...state,
                sortOption,
                articles: sortArticles(sortedArticles, sortOption)
            }

        default:
            return state;
    }
}

const rootReducer = combineReducers({articleList});

export default rootReducer;