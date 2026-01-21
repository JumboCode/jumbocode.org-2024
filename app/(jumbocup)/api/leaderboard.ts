import { NextApiRequest, NextApiResponse } from 'next';
import { getTeamScores } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const teamScores = await getTeamScores();
    res.status(200).json(teamScores);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}