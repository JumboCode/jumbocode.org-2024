'use client';
import { useEffect, useState } from 'react';

interface Team {
  id: number;
  name: string;
  score: number;
}

interface TeamScore {
  team_name: string;
  total_points: number;
}

// All expected teams - ensures we always show all 12 teams even with 0 points
const ALL_TEAMS = [
  "Artists for Humanity",
  "Beantown Baby Diaper Bank",
  "Boston Community Pediatrics",
  "Boston's Higher Ground",
  "Breaktime",
  "Commonwealth Kitchen",
  "Food for Free",
  "Food Link",
  "Lexington Zero Waste",
  "Massachusetts History Day",
  "School on Wheels",
  "The Loop Lab",
];

export default function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch('/api/leaderboard');
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard data');
        }
        const teamScores: TeamScore[] = await response.json();
        
        // Create a map of team scores from the API
        const scoreMap = new Map<string, number>();
        teamScores.forEach(teamScore => {
          scoreMap.set(teamScore.team_name, teamScore.total_points);
        });
        
        // Ensure all teams are included, even those with no events (0 points)
        const allTeamsWithScores: Team[] = ALL_TEAMS.map((teamName, index) => ({
          id: index + 1,
          name: teamName,
          score: scoreMap.get(teamName) || 0
        }));
        
        setTeams(allTeamsWithScores);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-8 max-w-4xl mx-auto px-4">
        <div className="text-white text-xl">Loading leaderboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center mt-8 max-w-4xl mx-auto px-4">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }
  // Sort teams by score in descending order, then alphabetically by name for ties
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.name.localeCompare(b.name);
  });

  // Calculate ranks handling ties
  const teamsWithRanks = sortedTeams.map((team, index) => {
    let rank = 1;
    for (let i = 0; i < index; i++) {
      if (sortedTeams[i].score !== team.score) {
        rank = i + 2;
        break;
      }
    }
    return { ...team, rank };
  });
  
  // Get top 3 for podium and remaining for rows
  const podiumTeams = teamsWithRanks.slice(0, 3);
  const remainingTeams = teamsWithRanks.slice(3);

  return (
    <div className="flex flex-col items-center justify-center mt-8 max-w-4xl mx-auto px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        JumboCup Spring 2026 Leaderboard
      </h2>

      {/* Podium Section */}
      <div className="w-full mb-12">
        <div className="flex items-end justify-center gap-2 mb-6 max-w-3xl mx-auto">
          {/* 2nd Place */}
          <div className="flex flex-col items-center w-1/3">
            <div className="bg-gray-600 text-white px-2 py-2 rounded-t-lg mb-2 w-full text-center">
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[1]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[1]?.score}</div>
            </div>
            <div className="bg-gray-400 w-full h-20 rounded-t-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{podiumTeams[1]?.rank}</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center w-1/3">
            <div className="bg-yellow-500 text-gray-900 px-2 py-2 rounded-t-lg mb-2 w-full text-center">
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[0]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[0]?.score}</div>
            </div>
            <div className="bg-yellow-400 w-full h-28 rounded-t-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">{podiumTeams[0]?.rank}</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center w-1/3">
            <div className="bg-orange-600 text-white px-2 py-2 rounded-t-lg mb-2 w-full text-center">
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[2]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[2]?.score}</div>
            </div>
            <div className="bg-orange-400 w-full h-16 rounded-t-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{podiumTeams[2]?.rank}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Remaining Teams */}
      <div className="w-full space-y-2">
        {remainingTeams.map((team) => {
          return (
            <div
              key={team.id}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-colors duration-200 px-6 py-4 rounded-lg border border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="font-bold text-white text-sm">{team.rank}</span>
                </div>
                <span className="font-semibold text-white text-lg">{team.name}</span>
              </div>
              <div className="text-brand text-xl font-bold">
                {team.score.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-subtext text-sm mt-6 text-center">
        Last update: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}