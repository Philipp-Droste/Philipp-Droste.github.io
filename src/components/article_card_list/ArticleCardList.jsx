import React, { useState, useEffect } from 'react';
import { loadArticleMetadatas } from './functions';
import ArticleCard from '../article_card/ArticleCard.jsx';

const ArticleCardList = ({ articleType }) => {
    const [articleMetadatas, setArticleMetadatas] = useState([]);

    useEffect(() => {
        async function loadAndSetArticleMetadatas(articleType) {
            const retrievedArticleMetadatas = await loadArticleMetadatas(articleType);
            setArticleMetadatas(retrievedArticleMetadatas);
        }
        loadAndSetArticleMetadatas(articleType);
    }, [articleType]);

    return (
        <ul>
            {articleMetadatas.map(articleMetadata => (
                <li key={articleMetadata.id}>
                    <ArticleCard {...articleMetadata} />
                </li>
            ))}
        </ul>
    );
};

export default ArticleCardList;