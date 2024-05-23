const articleTypes = {
    blog: "blog_articles",
    project: "project_articles"
}

const loadArticleMetadata = async (articleType, articleName) => {
    const response = await fetch(`/articles/${articleTypes[articleType]}/${articleName}/metadata.json`);
    const metadata = await response.json();
    return metadata;
};