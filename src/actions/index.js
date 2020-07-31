export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const SEARCH_ARTICLES = "SEARCH_ARTICLES";
export const SORT_ARTICLES = "SORT_ARTICLES";

export const requestTopArticles= () => ({
    type: REQUEST_ARTICLES
});

export const receiveTopArticles= (articles) => ({
    type: RECEIVE_ARTICLES,
    articles
});

export const searchArticles = (searchString) => ({
    type: SEARCH_ARTICLES,
    searchString
})

export const sortArticles = (sortOption) => ({
    type: SORT_ARTICLES,
    sortOption
})

export const fetchTopArticles = () => async (dispatch) => {
    dispatch(requestTopArticles());
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    const topArticleIds = await response.json();
    const detailsPromise = topArticleIds.map((id) => {
        return getArticleDetails(id);
    })

    const articleDetails = await Promise.all(detailsPromise);
    localStorage.setItem("articles", JSON.stringify(articleDetails));
    dispatch(receiveTopArticles(articleDetails))
    console.log(articleDetails)
}

const getArticleDetails = async (articleId) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`);
    const articleDetails = await response.json();
    return articleDetails
}