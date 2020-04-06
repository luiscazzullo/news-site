import React, { useState, useEffect } from 'react';
//Components
import Header from './components/header/Header';
import Form from './components/form/Form';
import NewsList from './components/newsList/NewsList';

function App() {
  const [category, setCategory] = useState('');
  const [news, setNews] = useState([])
  useEffect(() => {
    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=cd87ebe69900407fa3b514d22de6eb57`;
      const request = await fetch(url);
      const news = await request.json();
      setNews(news.articles);
    }
    getNews();
  }, [category]);

  return (
    <>
      <Header 
        title="Buscador de noticias" 
      />
      <div className="container white"> 
        <Form 
          setCategory={setCategory}
        />
        <NewsList 
          news={news}
        />
      </div>
    </>
  );
}

export default App;
