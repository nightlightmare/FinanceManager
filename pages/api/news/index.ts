import { promises as fs } from 'fs';
import path from 'path';
import { NewsType } from 'types/news';
import type { NextApiRequest, NextApiResponse } from 'next';

// TODO: вынести функции в utils
/** Получаем новости из файла */
const readNewsFile = async () => {
  const JSON_DIRECTORY = path.join(process.cwd(), 'json');
  const filePath = path.join(JSON_DIRECTORY, 'news.json');
  const fileContents = await fs.readFile(filePath, 'utf8');

  return JSON.parse(fileContents);
};

/** Записываем новость в файл */
const writeNewsFile = async (data: NewsType[]) => {
  const JSON_DIRECTORY = path.join(process.cwd(), 'json');
  const filePath = path.join(JSON_DIRECTORY, 'news.json');

  await fs.writeFile(filePath, JSON.stringify(data));
};

/** Сортировка новостей (без изменения исходного массива) */
const sortNews = (newsArray: NewsType[]): NewsType[] => {
  const news = [...newsArray];

  news.sort((a, b) => {
    if (a.date < b.date) { return 1; }

    if (a.date > b.date) { return -1; }

    return 0;
  });

  return news;
};

/** Работа с новостями */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /** Добавление новости */
  if (req.method === 'POST') {
    try {
      const news: NewsType[] = await readNewsFile();

      news.push({
        id: Number(new Date()),
        date: req.body.date,
        title: req.body.title,
        body: req.body.body,
      });

      await writeNewsFile(sortNews(news));

      res.status(200).send(sortNews(news));
    } catch (err) {
      res.status(500);
    }
  }

  /** Редактирование новости */
  if (req.method === 'PUT') {
    try {
      const news: NewsType[] = await readNewsFile();

      const index = news.findIndex((newsItem) => newsItem.id === req.body.id);

      news.splice(index, 1, {
        id: req.body.id,
        date: req.body.date,
        title: req.body.title,
        body: req.body.body,
      });

      await writeNewsFile(sortNews(news));

      res.status(200).send(sortNews(news));
    } catch (err) {
      res.status(500);
    }
  }

  /** Удаление новости */
  if (req.method === 'DELETE') {
    try {
      const news: NewsType[] = await readNewsFile();

      const index = news.findIndex((newsItem) => newsItem.id === req.body.id);

      news.splice(index, 1);

      await writeNewsFile(sortNews(news));

      res.status(200).send(sortNews(news));
    } catch (err) {
      res.status(500);
    }
  }
}
