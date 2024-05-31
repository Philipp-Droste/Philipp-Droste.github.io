import React from 'react';
import ArticleCardList from '../components/article_card_list/ArticleCardList.jsx';

const Home = () => {
  return (
    <div>
      <ArticleCardList articleType={'blog'}/>
    </div>
  );
};

export default Home;