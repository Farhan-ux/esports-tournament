import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { teams, matches } from '../data/tournament';

export default function LiveMatchPanel() {
  const live = matches.find(m => m.status === 'live');
  if (!live) {
    return (
      <div className="esports-panel h-full flex items-center justify-center">
        <span className="text-gray-500 text-sm">No live match</span>
      </div>
    );
  }

  const t1 = teams.find(t => t.id === live.team1)!;
  const t2 = teams.find(t => t.id === live.team2)!;

  const compareData = t1.players.map((p, i) => {
    const p2 = t2.players[i];
    return {
      role: p.role,
      [t1.tag]: p.rating,
      [t2.tag]: p2.rating,
    };
  });

  return (
    <div className="esports-panel h-full flex flex-col">
      <div className="esports-header">
        <span className="esports-label">Live Match</span>
        <span className="text-neon-pink text-[10px] animate-pulse">LIVE</span>
      </div>
      <div className="px-3 py-2 border-b border-esports-border/50">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <span className="text-xl">{t1.logo}</span>
            <div className="text-white font-bold text-sm mt-1">{t1.name}</div>
          </div>
          <div className="text-center px-6">
            <div className="text-neon-gold font-extrabold text-xl">{live.score1} - {live.score2}</div>
            <div className="text-[9px] text-gray-500 mt-0.5">{live.map} | BO3</div>
          </div>
          <div className="text-center">
            <span className="text-xl">{t2.logo}</span>
            <div className="text-white font-bold text-sm mt-1">{t2.name}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={compareData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2345" />
            <XAxis type="number" domain={[0.8, 1.5]} tick={{ fontSize: 9, fill: '#6b7280' }} axisLine={false} />
            <YAxis dataKey="role" type="category" tick={{ fontSize: 9, fill: '#6b7280' }} axisLine={false} width={50} />
            <Tooltip contentStyle={{ backgroundColor: '#120e20', border: '1px solid #2a2345', fontSize: 11, borderRadius: 4 }} />
            <Bar dataKey={t1.tag} fill="#a855f7" radius={[0, 2, 2, 0]} barSize={12} />
            <Bar dataKey={t2.tag} fill="#22d3ee" radius={[0, 2, 2, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}