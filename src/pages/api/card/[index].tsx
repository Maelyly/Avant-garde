import type { NextApiRequest, NextApiResponse } from 'next';
import { CardService } from '../../../services/card.service';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const router = useRouter();
  const session = await getSession();

  const user = session?.user;

  if (req.method === 'POST') {
    const cardService = new CardService();
    const { name, day, tag, resume, userId, status } = req.body;
    let dayS = new Date(day);
    try {
      let newCard = await cardService.createCard({
        name,
        day: dayS,
        tag,
        resume,
        userId,
        status,
      });
      res.json(newCard);
    } catch (e) {
      console.log('Erro ');
      console.log(e);
    }
  } else if (req.method === 'GET') {
    const cardService = new CardService();
    try {
      const data = router.query;
      console.log(data);
      // let newCard = await cardService.findAllById(user.);
      // res.json(newCard);
    } catch (e) {
      console.log('Erro ');
      console.log(e);
    }
  } else {
    res.status(503).json({ body: 'not get or post' });
  }
  //   if (req.method === 'POST') {
  //     const { userId, status } = req.body;
  //     const cardService = new CardService();
  //     const posts = await cardService.findAllByStatus(userId, status);
  //     res.json(posts);
  //   } else {
  //     res.status(200).json({ body: 'just post available' });
  //   }
}
