import { query } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface TeamEvent {
  id: number;
  name: string;
  points: number;
  event_date: string;
  created_at: string;
}

// Get all events for a specific team
export async function GET(req: NextRequest, { params }: { params: { teamName: string } }) {
  try {
    const teamName = decodeURIComponent(params.teamName);
    
    const result = await query(`
      SELECT 
        id,
        event_name as name,
        points,
        event_date,
        created_at
      FROM jumbocup
      WHERE team_name = $1
      ORDER BY event_date DESC, created_at DESC
    `, [teamName]);

    const events = result as TeamEvent[];

    return NextResponse.json(events);
  } catch (error) {
    console.error('Database error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({ 
      message: 'Unable to fetch team events'
    }, { status: 500 });
  }
}