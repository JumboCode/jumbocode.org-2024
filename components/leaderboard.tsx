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

interface TeamEvent {
  id: number;
  name: string;
  points: number;
  event_date: string;
  created_at: string;
}

// All expected teams
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
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [allTeamEvents, setAllTeamEvents] = useState<{ [teamName: string]: TeamEvent[] }>({});
  const [eventsLoading, setEventsLoading] = useState(false);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch('/api/leaderboard-unified');
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard data');
        }
        const data = await response.json();
        
        // Create a map of team scores from the API
        const scoreMap = new Map<string, number>();
        data.teams.forEach((teamScore: TeamScore) => {
          scoreMap.set(teamScore.team_name, teamScore.total_points);
        });
        
        // Ensure all teams are included, even those with no events (0 points)
        const allTeamsWithScores: Team[] = ALL_TEAMS.map((teamName, index) => ({
          id: index + 1,
          name: teamName,
          score: scoreMap.get(teamName) || 0
        }));
        
        setTeams(allTeamsWithScores);
        setAllTeamEvents(data.events);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  const fetchTeamEvents = async (teamName: string) => {
    if (selectedTeam === teamName) {
      // Close if same team clicked
      setSelectedTeam(null);
      return;
    }

    setSelectedTeam(teamName);
  };

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
      if (sortedTeams[i].score > team.score) {
        rank++;
      }
    }
    return { ...team, rank };
  });
  
  // Get top 3 for podium and remaining for rows
  const podiumTeams = teamsWithRanks.slice(0, 3);
  const remainingTeams = teamsWithRanks.slice(3);

  // Find the most recent event timestamp
  const getMostRecentEventDate = (): Date | null => {
    let mostRecentDate: Date | null = null;
    
    Object.values(allTeamEvents).forEach(events => {
      events.forEach(event => {
        const eventDate = new Date(event.created_at);
        if (!mostRecentDate || eventDate > mostRecentDate) {
          mostRecentDate = eventDate;
        }
      });
    });
    
    return mostRecentDate;
  };

  const mostRecentDate = getMostRecentEventDate();

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
            <div 
              onClick={() => fetchTeamEvents(podiumTeams[1]?.name || '')}
              className="bg-gray-500 text-white px-2 py-2 rounded-t-lg mb-2 w-full text-center cursor-pointer hover:bg-gray-600 transition-colors duration-200"
            >
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[1]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[1]?.score}</div>
              <div className="text-xs text-gray-300 mt-1">
              </div>
            </div>
            <div className="bg-gray-400 w-full h-20 rounded-t-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{podiumTeams[1]?.rank}</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center w-1/3">
            <div 
              onClick={() => fetchTeamEvents(podiumTeams[0]?.name || '')}
              className="bg-yellow-500 text-gray-900 px-2 py-2 rounded-t-lg mb-2 w-full text-center cursor-pointer hover:bg-yellow-600 transition-colors duration-200"
            >
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[0]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[0]?.score}</div>
              <div className="text-xs text-gray-700 mt-1">
              </div>
            </div>
            <div className="bg-yellow-400 w-full h-28 rounded-t-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">{podiumTeams[0]?.rank}</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center w-1/3">
            <div 
              onClick={() => fetchTeamEvents(podiumTeams[2]?.name || '')}
              className="bg-orange-600 text-white px-2 py-2 rounded-t-lg mb-2 w-full text-center cursor-pointer hover:bg-orange-700 transition-colors duration-200"
            >
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[2]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[2]?.score}</div>
              <div className="text-xs text-orange-200 mt-1">
              </div>
            </div>
            <div className="bg-orange-400 w-full h-16 rounded-t-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{podiumTeams[2]?.rank}</span>
            </div>
          </div>
        </div>

        {/* Podium Team Events */}
        {selectedTeam && podiumTeams.some(team => team?.name === selectedTeam) && (
          <div className="mt-6 bg-gray-900 rounded-lg p-4 border-l-4 border-brand max-w-3xl mx-auto">
            {eventsLoading ? (
              <div className="text-gray-400 text-center py-4">Loading events...</div>
            ) : allTeamEvents[selectedTeam]?.length > 0 ? (
              <div className="space-y-2">
                <h4 className="text-brand font-semibold mb-3">Events for {selectedTeam}</h4>
                {allTeamEvents[selectedTeam].map((event: TeamEvent) => (
                  <div key={event.id} className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded">
                    <div>
                      <div className="text-white font-medium">{event.name}</div>
                      <div className="text-gray-400 text-sm">
                        {new Date(event.event_date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-brand font-bold">+{event.points}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-400 text-center py-4">No events found for this team</div>
            )}
          </div>
        )}
      </div>

      {/* Remaining Teams */}
      <div className="w-full space-y-2">
        {remainingTeams.map((team) => {
          return (
            <div key={team.id}>
              <div
                onClick={() => fetchTeamEvents(team.name)}
                className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-colors duration-200 px-6 py-4 rounded-lg border border-gray-700 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="font-bold text-white text-sm">{team.rank}</span>
                  </div>
                  <span className="font-semibold text-white text-lg">{team.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-brand text-xl font-bold">
                    {team.score.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {selectedTeam === team.name ? '▾' : '▸'}
                  </div>
                </div>
              </div>
              
              {/* Team Events */}
              {selectedTeam === team.name && (
                <div className="ml-4 mt-2 bg-gray-900 rounded-lg p-4 border-l-4 border-brand">
                  {eventsLoading ? (
                    <div className="text-gray-400 text-center py-4">Loading events...</div>
                  ) : allTeamEvents[team.name]?.length > 0 ? (
                    <div className="space-y-2">
                      <h4 className="text-brand font-semibold mb-3">Events for {team.name}</h4>
                      {allTeamEvents[team.name].map((event: TeamEvent) => (
                        <div key={event.id} className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded">
                          <div>
                            <div className="text-white font-medium">{event.name}</div>
                            <div className="text-gray-400 text-sm">
                              {new Date(event.event_date).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="text-brand font-bold">+{event.points}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-400 text-center py-4">No events found for this team</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="text-subtext text-sm mt-6 text-center">
        Last update: {mostRecentDate ? mostRecentDate.toLocaleDateString() : 'No events yet'}
      </p>
    </div>
  );
}