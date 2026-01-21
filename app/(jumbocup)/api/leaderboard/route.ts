import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

interface TeamScore {
  team_name: string;
  total_points: number;
}

// async function addEvent(name: string, teamName: string, points: number, eventDate?: string): Promise<Event> {
//   const result = await query(
//     'INSERT INTO jumbocup (event_name, team_name, points, event_date) VALUES ($1, $2, $3, $4) RETURNING *',
//     [name, teamName, points, eventDate || new Date().toISOString().split('T')[0]]
//   );
//   return (result as Event[])[0];
// }

// Get JumboCup leaderboard scores
export async function GET() {
  try {
    const result = await query(`
      SELECT 
        team_name,
        SUM(points) as total_points
      FROM jumbocup
      GROUP BY team_name 
      ORDER BY total_points DESC, team_name ASC
    `);

    const teamScores = result as TeamScore[];

    return NextResponse.json(teamScores);
  } catch (error) {
    // Log detailed error information server-side only
    console.error('Database error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    // Return generic error message to client
    return NextResponse.json({ 
      message: 'Unable to fetch leaderboard data'
    }, { status: 500 });
  }
}