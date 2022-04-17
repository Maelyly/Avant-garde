import type { NextApiRequest, NextApiResponse } from 'next';
import { CardService } from '../../../services/card.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const cardService = new CardService();
  } else {
    res.status(200).json({ body: 'not get or post' });
  }
}