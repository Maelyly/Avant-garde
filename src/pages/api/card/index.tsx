import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { CardService } from '../../../services/card.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    const session = await getSession({ req });

    const user = session?.user;

    if (!user) return res.status(401).send('Not logged in');

    const cardService = new CardService();

    if (req.method === 'POST') {
      const { name, day, tag, resume, status } = req.body;
      const userId = user.id;
      const newCard = await cardService.createCard(userId, {
        name,
        day,
        tag,
        resume,
        status,
      });
      res.json(newCard);
    } else if (req.method === 'GET') {

      const data = req.query;
      console.log('data', data);
      const jsonData: { [key: string]: string | string[] | number } = {};
      Object.keys(data).map(key => {
        jsonData[key] = data[key];
      });
      jsonData['userId'] = user.id;
      if (!jsonData) return await cardService.findAllByUser(user.id);

      const cardsFilter = await cardService.filter(user.id, jsonData);

      return res.status(200).json(cardsFilter);
    } else {
      return res.status(405).send('Only GET and POST allowed');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
