import type { NextApiRequest, NextApiResponse } from 'next'
import { UserRepository } from '../../repositories/user.repository'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userRepository = new UserRepository();
  } else {
    res.status(200).json({ body: 'get' })
  }
}
