import { promises as fs } from 'fs';
import path from 'path';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import type { NextApiRequest, NextApiResponse } from 'next';

const NON_CASH_RATES_PATH = 'http://ibank1.armbusinessbank.local/appbank1.0/Default.aspx?action=rates(0)';
const CASH_RATES_PATH = 'http://ibank1.armbusinessbank.local/appbank1.0/Default.aspx?action=rates(1)';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const currentDate = new Date();
    const JSON_DIRECTORY = path.join(process.cwd(), 'json');
    const filePath = path.join(JSON_DIRECTORY, 'rates.json');
    const fileContents = await fs.readFile(filePath, 'utf8');

    res.status(200).send(fileContents);

    if (Math.abs(currentDate.getMinutes() - new Date(JSON.parse(fileContents).update_dt).getMinutes()) >= 1) {
      const nonCashResult = await axios(NON_CASH_RATES_PATH);
      const cashResult = await axios(CASH_RATES_PATH);

      if (nonCashResult && cashResult) {
        const data = {
          cash_result: (await parseStringPromise(cashResult.data)).Response,
          non_cash_result: (await parseStringPromise(nonCashResult.data)).Response,
          update_dt: new Date().toJSON(),
        };

        await fs.writeFile(filePath, JSON.stringify(data));
      }

      res.status(401);
    }
  } catch (err) {
    res.status(500);
  }
}
