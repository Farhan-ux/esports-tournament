import { playerStats, ratingColor } from '../data/tournament';

export default function PlayerLeaderboard() {
  const sorted = [...playerStats].sort((a, b) => b.rating - a.rating);
  return (
    <div className="esports-panel h-full flex flex-col">
      <div className="esports-header">
        <span className="esports-label">Top Players</span>
        <span className="text-[10px] text-gray-500">By Rating</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-[11px]">
          <thead className="sticky top-0 bg-esports-card">
            <tr className="border-b border-esports-border">
              <th className="text-left px-3 py-1 text-gray-500 font-normal">#</th>
              <th className="text-left px-2 py-1 text-gray-500 font-normal">Player</th>
              <th className="text-center px-2 py-1 text-gray-500 font-normal">K</th>
              <th className="text-center px-2 py-1 text-gray-500 font-normal">D</th>
              <th className="text-center px-2 py-1 text-gray-500 font-normal">A</th>
              <th className="text-right px-2 py-1 text-gray-500 font-normal">ADR</th>
              <th className="text-center px-2 py-1 text-gray-500 font-normal">HS%</th>
              <th className="text-right px-3 py-1 text-gray-500 font-normal">Rating</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p, i) => (
              <tr key={p.ign} className="border-b border-esports-border/20 hover:bg-esports-panel/50">
                <td className="px-3 py-1.5" style={{ color: i === 0 ? '#eab308' : i < 3 ? '#a855f7' : '#6b7280' }}>{i + 1}</td>
                <td className="px-2 py-1.5">
                  <span className="text-white font-medium">{p.ign}</span>
                  <span className="text-gray-600 ml-1">{p.team}</span>
                </td>
                <td className="px-2 py-1.5 text-center text-neon-green">{p.kills}</td>
                <td className="px-2 py-1.5 text-center text-neon-red">{p.deaths}</td>
                <td className="px-2 py-1.5 text-center text-neon-cyan">{p.assists}</td>
                <td className="px-2 py-1.5 text-right text-gray-300">{p.adr}</td>
                <td className="px-2 py-1.5 text-center text-neon-gold">{p.hs}%</td>
                <td className="px-3 py-1.5 text-right font-bold" style={{ color: ratingColor(p.rating) }}>{p.rating.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
