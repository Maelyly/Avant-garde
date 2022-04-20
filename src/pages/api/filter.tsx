import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { CardService } from '../../services/card.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const user = session?.user;

  if (!user) return res.status(401).send('Not logged in');

  const cardService = new CardService();

  if (req.method === 'GET') {
    const data = req.query;
    const cardsFilter = await cardService.filter(data);

    return res.status(200).json(cardsFilter);
  } else {
    return res.status(405).send('Only GET allowed');
  }
}
