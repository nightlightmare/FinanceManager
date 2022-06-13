import { promises as fs } from 'fs';
import path from 'path';

const getRates = async () => {
  const JSON_DIRECTORY = path.join(process.cwd(), 'json');
  const filePath = path.join(JSON_DIRECTORY, 'rates.json');
  return fs.readFile(filePath, 'utf8');
};

export default getRates;
