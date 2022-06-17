import { promises as fs } from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Возвращает все новости
 */
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const JSON_DIRECTORY = path.join(process.cwd(), 'json');
    const filePath = path.join(JSON_DIRECTORY, 'news.json');
    const fileContents = await fs.readFile(filePath, 'utf8');

    res.status(200).send(JSON.parse(fileContents));
  } catch (err) {
    res.status(500);
  }
}
