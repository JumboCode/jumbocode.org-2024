interface Team {
  id: number;
  name: string;
  score: number;
}

// Sample data - replace with your actual data source
// const teams: Team[] = [
//   { id: 1, name: "Beantown Baby Diaper Bank", score: 323 },
//   { id: 2, name: "Boston Community Pediatrics", score: 287 },
//   { id: 3, name: "Commonwealth Kitchen", score: 283 },
//   { id: 4, name: "Lexington Zero Waste", score: 243 },
//   { id: 5, name: "MHD", score: 219 },
//   { id: 6, name: "The Loop Lab", score: 178 },
//   { id: 7, name: "Food Link", score: 137 },
//   { id: 8, name: "School on Wheels", score: 100 },
//   { id: 9, name: "Boston's Higher Ground", score: 92 },
//   { id: 10, name: "Food for Free", score: 82 },
//   { id: 11, name: "Artists for Humanity", score: 70 },
//   { id: 12, name: "Breaktime", score: 46 },
// ];

const teams: Team[] = [
  { id: 1, name: "Artists for Humanity", score: 0 },
  { id: 2, name: "Beantown Baby Diaper Bank", score: 0 },
  { id: 3, name: "Boston Community Pediatrics", score: 0 },
  { id: 4, name: "Boston's Higher Ground", score: 0 },
  { id: 5, name: "Breaktime", score: 0 },
  { id: 6, name: "Commonwealth Kitchen", score: 0 },
  { id: 7, name: "Food for Free", score: 0 },
  { id: 8, name: "Food Link", score: 0 },
  { id: 9, name: "Lexington Zero Waste", score: 0 },
  { id: 10, name: "MHD", score: 0 },
  { id: 11, name: "School on Wheels", score: 0 },
  { id: 12, name: "The Loop Lab", score: 0 },
];

export default function Leaderboard() {
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
              <span className="text-2xl font-bold text-gray-800">2</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center w-1/3">
            <div className="bg-yellow-500 text-gray-900 px-2 py-2 rounded-t-lg mb-2 w-full text-center">
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[0]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[0]?.score}</div>
            </div>
            <div className="bg-yellow-400 w-full h-28 rounded-t-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">1</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center w-1/3">
            <div className="bg-orange-600 text-white px-2 py-2 rounded-t-lg mb-2 w-full text-center">
              <div className="font-semibold text-xs leading-tight break-words">{podiumTeams[2]?.name}</div>
              <div className="text-lg font-bold mt-1">{podiumTeams[2]?.score}</div>
            </div>
            <div className="bg-orange-400 w-full h-16 rounded-t-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">3</span>
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
        Updated in real-time • Last update: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}