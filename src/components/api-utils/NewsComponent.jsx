import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ourcap-hrms.ctportfolio.in/api/get-news', {
          headers: {
            'Authorization': 'Bearer 443|M2P6ohsYHhTgRO5I4p4IhjYmQNFr0NDOQfe4aBhobe6bee73'
          }
        });
        setNews(response.data.data.news);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="news-container">
      <h1>News</h1>
      {news.map(item => (
        <div className="news-item" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Created by: {item.name}</p>
          <p>Created at: {new Date(item.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
