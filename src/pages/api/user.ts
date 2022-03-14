import type { NextApiRequest, NextApiResponse } from "next"
import { UserService } from "../../services/user.service"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const userService = new UserService()

  if (req.method === "POST") {
    res.json(await userService.createUser(req.body))
  
  } else {
    res.status(200).json({ body: "get" })
  }
}
