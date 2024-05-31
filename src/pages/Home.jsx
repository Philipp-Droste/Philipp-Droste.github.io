import React from 'react';
import ArticleCardGrid from '../components/article_card_list/ArticleCardList.jsx';

const Home = () => {
  return (
    <div>
      <ArticleCardGrid articleType={'blog'}/>
    </div>
  );
};

export default Home;