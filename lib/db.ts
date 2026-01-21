import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export interface Event {
  id: number;
  name: string;
  team_name: string;
  points: number;
  event_date: string;
  created_at: string;
}

export interface TeamScore {
  team_name: string;
  total_points: number;
}

export async function getTeamScores(): Promise<TeamScore[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(`
      SELECT 
        team_name,
        SUM(points) as total_points
      FROM events 
      GROUP BY team_name 
      ORDER BY total_points DESC, team_name ASC
    `);
    return result.rows;
  } finally {
    client.release();
  }
}

export async function addEvent(name: string, teamName: string, points: number, eventDate?: string): Promise<Event> {
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO events (name, team_name, points, event_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, teamName, points, eventDate || new Date().toISOString().split('T')[0]]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}