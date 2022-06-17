import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { NewsType } from 'types/news';
import DatePicker from 'react-datepicker';
import Button from 'components/UI/Button';
import Modal from 'components/UI/Modal';
import formatDateToNews from 'utils/formatDateToNews';

import styles from './index.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

const EMPTY_NEWS = {
  id: 0,
  title: '',
  date: String(new Date()),
  body: '',
};

const AdminNewsPage: NextPage = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [editedNews, setEditedNews] = useState<NewsType>(EMPTY_NEWS);
  const [showModal, setShowModal] = useState(false);

  // Получаем новости после рендеринга компонента страницы
  useEffect(() => {
    axios.get('/api/getAllNews').then((response) => {
      setNews(response.data);
    });
  }, []);

  // Получение одной новости
  const getNews = async (id: number) => {
    setLoading(true);
    await axios.get(`/api/news/${id}`).then((response) => {
      setEditedNews(response.data);
    });
    setLoading(false);
  };

  // Создание новой новости
  const createNews = async () => {
    setLoading(true);
    await axios.post('/api/news', editedNews).then((response) => {
      setNews(response.data);
    });
    setLoading(false);
  };

  // Редактирование выбранной новости
  const editNews = async () => {
    setLoading(true);
    await axios.put('/api/news', editedNews).then((response) => {
      setNews(response.data);
    });
    setLoading(false);
  };

  // Удаление новости с выбранным id
  const deleteNewsHandler = async (id: number) => {
    setLoading(true);
    await axios.delete('/api/news', {
      data: { id },
    }).then((response) => {
      setNews(response.data);
    });
    setLoading(false);
  };

  // Открытие модалки
  const openModalHandler = () => {
    setShowModal(true);
  };

  // Закрытие модалки
  const closeModalHandler = () => {
    setShowModal(false);
  };

  // это мы делаем, когда нажимаем кнопку "создать новость"
  const createNewsHandler = () => {
    setEditedNews(EMPTY_NEWS);
    openModalHandler();
  };

  // это мы делаем, когда нажимаем кнопку "редактировать". async потому что надо дождаться загрузки данных по новости
  const editNewsHandler = async (id: number) => {
    await getNews(id);
    openModalHandler();
  };

  // это мы делаем, когда нажимаем кнопку "сохранить" в модалке
  const saveNewsHandler = async () => {
    if (editedNews.id === 0) {
      await createNews();
    } else {
      await editNews();
    }
    closeModalHandler();
  };

  return (
    <>
      <Head>
        <title>Admin panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>Список новостей</h1>

        <div>
          <Button
            onClick={createNewsHandler}
            disabled={loading}
          >
            Создать новость
          </Button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата</th>
              <th>Заголовок</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{formatDateToNews(new Date(item.date))}</td>
                <td>{item.title}</td>
                <td className={styles.actions}>
                  <Button
                    onClick={() => { editNewsHandler(item.id); }}
                    disabled={loading}
                  >
                    Редактировать
                  </Button>
                  <Button
                    onClick={() => { deleteNewsHandler(item.id); }}
                    type="no-bg"
                    disabled={loading}
                  >
                    Удалить
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <Modal
          title={(
            <h4 className={styles['modal-title']}>
              {editedNews.id === 0 ? 'Создать новость' : 'Редактировать новость'}
            </h4>
          )}
          actions={(
            <>
              <Button onClick={saveNewsHandler} disabled={loading}>Сохранить</Button>
              <Button onClick={closeModalHandler} type="no-bg">Отмена</Button>
            </>
          )}
        >
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.param}>Дата</div>
              <div className={styles.param}>
                <DatePicker
                  dateFormat="dd.MM.yyyy"
                  selected={new Date(editedNews.date)}
                  // @ts-ignore
                  onChange={(date) => setEditedNews((prevNews) => ({ ...prevNews, date: date?.toISOString() }))}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.param}>Заголовок</div>
              <div className={styles.param}>
                <input
                  type="text"
                  value={editedNews.title}
                  onChange={(title) => setEditedNews((prevNews) => ({ ...prevNews, title: title.target.value }))}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.param}>Текст</div>
              <div className={styles.param}>
                <textarea
                  value={editedNews.body}
                  onChange={(body) => setEditedNews((prevNews) => ({ ...prevNews, body: body.target.value }))}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AdminNewsPage;
