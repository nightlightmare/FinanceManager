import { promises as fs } from 'fs';
import path from 'path';
import { NewsType } from 'types/news';
import type { NextApiRequest, NextApiResponse } from 'next';

/** Читаем новости из файла */
const readNewsFile = async () => {
  const JSON_DIRECTORY = path.join(process.cwd(), 'json');
  const filePath = path.join(JSON_DIRECTORY, 'news.json');
  const fileContents = await fs.readFile(filePath, 'utf8');

  return JSON.parse(fileContents);
};

/** Получение одной новости */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { query: { id } } = req;
    const news: NewsType[] = await readNewsFile();

    const index = news.findIndex((newsItem) => newsItem.id === Number(id));

    res.status(200).send(news[index]);
  } catch (err) {
    res.status(500);
  }
}
