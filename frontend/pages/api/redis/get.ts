import { NextApiRequest, NextApiResponse } from 'next'
import { redis } from 'utils/cache'

type Response = {}

export default async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  const {
    query: { key },
    method,
  } = req

  if (req.method === 'GET') {
    // Process a POST request
    try {
      const count = await redis.get(key as string)
      res.status(200).json({ count })
    } catch (error) {
      res.status(500).json({})
    }
  } else {
    res.status(405).json('Method not allowed')
  }
}
