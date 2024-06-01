import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Articles from './pages/Articles.jsx';
import MarkdownPage from './pages/MarkdownPage.jsx';
import { articleTypes } from './components/article_card_list/functions.js';

export async function getArticleDirectories(articleType) {
  const response = await fetch(`/articles/${articleTypes[articleType]}/directories.json`, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
  });

  return await response.json();
}

const App = () => {
  const [blogArticleDirectories, setBlogArticleDirectories] = useState([]);
  const [projectArticleDirectories, setProjectArticleDirectories] = useState([]);

  useEffect(() => {
      async function loadData() {
        const retrievedBlogArticleDirectories = await getArticleDirectories('blog');
        const retrievedProjectArticleDirectories = await getArticleDirectories('blog');
        setBlogArticleDirectories(retrievedBlogArticleDirectories);
        setProjectArticleDirectories(retrievedProjectArticleDirectories);
      }
      loadData();
  }, []);

  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />}>
            {projectArticleDirectories.map(articleDirectory => (
              <Route path={`/${articleDirectory}`} element={<MarkdownPage file={`articles/${articleTypes['project']}/${articleDirectory}/post.md`}/>} />
            ))}
          </Route>
          <Route path="/blog" element={<Articles />}>
            {blogArticleDirectories.map(articleDirectory => (
              <Route path={`/${articleDirectory}`} element={<MarkdownPage file={`articles/${articleTypes['blog']}/${articleDirectory}/post.md`}/>} />
            ))}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;