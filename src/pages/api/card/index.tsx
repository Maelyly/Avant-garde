import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { CardService } from '../../../services/card.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getSession({ req });

    let user = session?.user;

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
      console.log(newCard);
      res.json(newCard);
    } else if (req.method === 'GET') {
      const data = req.query;
      const jsonData: { [key: string]: any } = {};

      const pParams = ['day', 'tag', 'name', 'resume', 'status', 'id', 'prioritize'];

      Object.keys(data).map((key) => {
        if (!(key in pParams)) return res.status(404).json({error: 'invalid params'});
        jsonData[key] = data[key];
      });

      if (!jsonData) return await cardService.findAllByUser(user.id);

      jsonData['userId'] = user.id;

      if (data.id) jsonData.id = parseInt(data.id.toString());

      if (data.prioritize) jsonData.prioritize = (data.prioritize === 'true');

      const cardsFilter = await cardService.filter(jsonData);
      console.log(cardsFilter);

      return res.status(200).json(cardsFilter);

    } else if (req.method === 'PATCH') {
      const data = req.body;

      data['userId'] = user.id;

      const cardReturn = await cardService.updateCard(data);
      return res.status(200).json(cardReturn);
    } else if (req.method === 'DELETE') {
      const id = req.body.id;
      const returnDelete = await cardService.deleteCard(id);
      console.log(returnDelete);
      res.json(returnDelete);
    } else {
      return res.status(405).send('Only GET, POST, PATCH and DELETE allowed');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
