import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { CardService } from '../../../services/card.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const user = session?.user;

  if (!user) return res.status(401).send('Not logged in');

  const cardService = new CardService();

  if (req.method === 'POST') {
    const { name, day, tag, resume, status } = req.body;
    const userId = user.id;
    const newCard = await cardService.createCard({
      name,
      day: new Date(day),
      tag,
      resume,
      userId,
      status,
    });
    res.json(newCard);
  } else if (req.method === 'GET') {
    var data = req.query;
    data['userId'] = `${user.id}`;
    if (!data) return await cardService.findAllByUser(user.id);
    const cardsFilter = await cardService.filter(user.id, data);
    return res.status(200).json(cardsFilter);
  } else {
    return res.status(405).send('Only GET and POST allowed');
  }
}
