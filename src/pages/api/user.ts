import type { NextApiRequest, NextApiResponse } from 'next';
import { UserRepository } from '../../repositories/user.repository';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const userRepository = new UserRepository();
    const {email, password, name} = req.body;
    const user = await userRepository.findByEmail(email);

    if(user) return res.status(409).send('User already exists');

    let newuser = await userRepository.createUser({email, password, name});
    res.json(newuser);
  } else {
    res.status(200).json({ body: 'get' });
  }
}
