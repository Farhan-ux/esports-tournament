import { teams } from '../data/tournament';

export default function TeamStandings() {
  const sorted = [...teams].sort((a, b) => b.wins - a.wins || b.roundDiff - a.roundDiff);
  return (
    <div className="esports-panel h-full flex flex-col">
      <div className="esports-header">
        <span className="esports-label">Team Standings</span>
        <span className="text-[10px] text-gray-500">{teams.length} teams</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-[11px]">
          <thead className="sticky top-0 bg-esports-card">
            <tr className="border-b border-esports-border">
              <th className="text-left px-3 py-1 text-gray-500 font-normal">#</th>
              <th className="text-left px-2 py-1 text-gray-500 font-normal">Team</th>
              <th className="text-center px-2 py-1 text-gray-500 font-normal">W</th>
              <th className="text-center px-2 py-1 text-gray-500 font-normal">L</th>
              <th className="text-right px-3 py-1 text-gray-500 font-normal">RD</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((t, i) => (
              <tr key={t.id} className="border-b border-esports-border/20 hover:bg-esports-panel/50">
                <td className="px-3 py-1.5" style={{ color: i < 4 ? '#a855f7' : '#6b7280' }}>{i + 1}</td>
                <td className="px-2 py-1.5">
                  <span className="mr-1">{t.logo}</span>
                  <span className="text-white font-medium">{t.tag}</span>
                </td>
                <td className="px-2 py-1.5 text-center text-neon-green">{t.wins}</td>
                <td className="px-2 py-1.5 text-center text-neon-red">{t.losses}</td>
                <td className={`px-3 py-1.5 text-right ${t.roundDiff >= 0 ? 'text-neon-green' : 'text-neon-red'}`}>{t.roundDiff >= 0 ? '+' : ''}{t.roundDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}