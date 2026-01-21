import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

interface TeamScore {
  team_name: string;
  total_points: number;
}

interface Event {
  id: number;
  name: string;
  team_name: string;
  points: number;
  event_date: string;
  created_at: string;
}

async function getTeamScores(): Promise<TeamScore[]> {
  console.log('Attempting to query database...');
  const result = await query(`
    SELECT 
      team_name,
      SUM(points) as total_points
    FROM jumbocup
    GROUP BY team_name 
    ORDER BY total_points DESC, team_name ASC
  `);
  console.log('Database query successful, rows:', result);
  return result;
}

async function addEvent(name: string, teamName: string, points: number, eventDate?: string): Promise<Event> {
  const result = await query(
    'INSERT INTO jumbocup (event_name, team_name, points, event_date) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, teamName, points, eventDate || new Date().toISOString().split('T')[0]]
  );
  return result[0];
}

export async function GET(req: NextRequest) {
  try {
    console.log('API route called');
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    
    const teamScores = await getTeamScores();
    console.log('Team scores fetched:', teamScores);
    return NextResponse.json(teamScores);
  } catch (error) {
    console.error('Database error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}