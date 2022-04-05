import type { NextApiRequest, NextApiResponse } from 'next';
import { UserService } from '../../services/user.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const userService = new UserService();
    const { email, password, name } = req.body;
    let newUser = await userService.createUser({ email, password, name });
    if ('error' in newUser) {
      res.status(401).json(newUser);
    }
    res.json(newUser);
  } else {
    res.status(200).json({ body: 'get' });
  }

}