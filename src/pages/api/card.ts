import type { NextApiRequest, NextApiResponse } from 'next';
import { CardService } from '../../services/card.service';
import { UserService } from '../../services/user.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const cardService = new CardService();
    const { name, day, tag, resume, user, status } = req.body;
    let newcard = await cardService.createCard({
      name,
      day,
      tag,
      resume,
      user,
      status,
    });
    res.json(newcard);
  } else if (req.method === 'GET') {
    const cardService = new CardService();
    let newcard = await cardService.findAll();
    res.json(newcard);
  } else {
    res.status(200).json({ body: 'not get or post' });
  }
}
