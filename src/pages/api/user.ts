import type { NextApiRequest, NextApiResponse } from 'next';
import { UserService } from '../../services/user.service';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const userService = new UserService();
    const { email, password, name } = req.body;
    let newuser = await userService.createUser({ email, password, name });
    res.json(newuser);
  } else {
    res.status(200).json({ body: 'get' });
  }
}
