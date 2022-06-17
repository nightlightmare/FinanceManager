import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import formatDateToNews from 'utils/formatDateToNews';
import { NewsType } from 'types/news';

import styles from './NewsList.module.scss';

const NewsList: React.FC = () => {
  const [news, setNews] = useState<NewsType[]>([]);

  // После того, как компонент отрендерился, получаем последние новости
  useEffect(() => {
    axios.get('/api/getFeaturedNews').then((response) => {
      setNews(response.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Новости</h2>

          <ul className={styles.list}>
            {news.map((newsItem) => (
              <li className={styles['list-item']} key={newsItem.id}>
                <Link href={`/news/${newsItem.id}`}>
                  <p className={styles.text}>
                    {newsItem.title.length > 75
                      ? `${newsItem.title.slice(0, 75)}…`
                      : newsItem.title}
                  </p>
                </Link>
                <div className={styles.date}>
                  {formatDateToNews(new Date(newsItem.date))}
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.actions}><Link href="/">Все новости</Link></div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
