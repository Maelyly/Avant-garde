import type { NextApiRequest, NextApiResponse } from 'next';
import { CardService } from '../../../services/card.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userId } = req.body;
    const cardService = new CardService();
    const posts = await cardService.findAllByUser(userId);
    res.json(posts);
  } else {
    res.status(200).json({ body: 'just post available' });
  }
}
