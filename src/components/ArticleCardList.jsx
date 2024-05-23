const [articleMetadatas, setArticleMetadatas] = useState([]);

useEffect(() => {
    const loadPosts = async () => {
        // Assuming a directory listing API or another mechanism to list directories
        const postDirs = ['first_post', 'second_post']; // This would be dynamic in a real scenario
        const postsData = await Promise.all(postDirs.map(dir => loadPostMetadata(dir)));
        setArticleMetadatas(postsData);
    };

    loadPosts();
}, []);

const ArticleCardList = () => {
    return (
        <ul>
            {articleMetadatas.map(articleMetadata => (
                <ArticleCard>

                </ArticleCard>
            ))}
        </ul>
    );
};

export default ArticleCardList