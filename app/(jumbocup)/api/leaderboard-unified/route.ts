import { query } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface TeamScore {
  team_name: string;
  total_points: number;
}

interface TeamEvent {
  id: number;
  name: string;
  points: number;
  event_date: string;
  created_at: string;
}

interface LeaderboardData {
  teams: TeamScore[];
  events: { [teamName: string]: TeamEvent[] };
}

// Get complete leaderboard data - all teams and all their events
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const teamName = searchParams.get('team');

    // If requesting specific team events
    if (teamName) {
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
    }

    // Get all team scores
    const teamScoresResult = await query(`
      SELECT 
        team_name,
        SUM(points) as total_points
      FROM jumbocup
      GROUP BY team_name 
      ORDER BY total_points DESC, team_name ASC
    `);

    const teamScores = teamScoresResult as TeamScore[];

    // Get all events grouped by team
    const allEventsResult = await query(`
      SELECT 
        team_name,
        id,
        event_name as name,
        points,
        event_date,
        created_at
      FROM jumbocup
      ORDER BY team_name, event_date DESC, created_at DESC
    `);

    const allEvents = allEventsResult as (TeamEvent & { team_name: string })[];

    // Group events by team name
    const eventsByTeam: { [teamName: string]: TeamEvent[] } = {};
    allEvents.forEach(event => {
      if (!eventsByTeam[event.team_name]) {
        eventsByTeam[event.team_name] = [];
      }
      eventsByTeam[event.team_name].push({
        id: event.id,
        name: event.name,
        points: event.points,
        event_date: event.event_date,
        created_at: event.created_at
      });
    });

    const leaderboardData: LeaderboardData = {
      teams: teamScores,
      events: eventsByTeam
    };

    return NextResponse.json(leaderboardData);
  } catch (error) {
    console.error('Database error details:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({ 
      message: 'Unable to fetch leaderboard data'
    }, { status: 500 });
  }
}