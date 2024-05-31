import React, { useState, useEffect } from 'react';
import { loadArticleMetadatas } from './functions';
import ArticleCard from '../article_card/ArticleCard.jsx';

const ArticleCardGrid = ({ articleType }) => {
    const [articleMetadatas, setArticleMetadatas] = useState([]);

    useEffect(() => {
        async function loadAndSetArticleMetadatas(articleType) {
            const retrievedArticleMetadatas = await loadArticleMetadatas(articleType);
            setArticleMetadatas(retrievedArticleMetadatas);
        }
        loadAndSetArticleMetadatas(articleType);
    }, [articleType]);

    return (
        <div class="container-fluid mt-3 ml-3">
            <div class="row row-cols-1 row-cols-md-6 g-4">
                {articleMetadatas.map(articleMetadata => (
                    <div class="col">
                        <ArticleCard {...articleMetadata} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleCardGrid;