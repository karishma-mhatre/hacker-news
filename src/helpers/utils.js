export const sortArticles = (articles, sortOption) => {
    switch(sortOption) {
        case "Score - Low to High":
            articles.sort((articleA, articleB) => articleA.score - articleB.score)
            break;
        case "Score - High to Low":
            articles.sort((articleA, articleB) => articleB.score - articleA.score);
            break;
        case "Created At - Old to New":
            articles.sort((articleA, articleB) => articleA.time - articleB.time);
            break;
        case "Created At - New to Old":
            articles.sort((articleA, articleB) => articleB.time - articleA.time);
            break;
        default: 
            break;
    }
    return articles;
}