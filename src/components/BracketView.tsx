import { matches, getTeam } from '../data/tournament';

export default function BracketView() {
  return (
    <div className="esports-panel h-full flex flex-col">
      <div className="esports-header">
        <span className="esports-label">Tournament Bracket</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="space-y-3">
          {matches.map(m => {
            const t1 = getTeam(m.team1);
            const t2 = getTeam(m.team2);
            const isLive = m.status === 'live';
            return (
              <div key={m.id} className={`rounded-lg border p-2 transition-all ${isLive ? 'border-neon-pink bg-neon-pink/5' : 'border-esports-border/50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] text-gray-500 uppercase">{m.round}</span>
                  <span className="text-[9px] text-gray-600">{m.map}</span>
                  {m.status === 'live' && <span className="text-[9px] text-neon-pink animate-pulse">LIVE</span>}
                  {m.status === 'completed' && <span className="text-[9px] text-gray-600">FT</span>}
                  {m.status === 'upcoming' && <span className="text-[9px] text-gray-600">UPCOMING</span>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-1">
                    {t1 && <><span className="text-sm">{t1.logo}</span><span className={`text-xs ${m.score1 > m.score2 ? 'text-white font-bold' : 'text-gray-400'}`}>{t1.tag}</span></>}
                  </div>
                  <span className="text-neon-gold font-bold text-sm mx-3">{m.score1} : {m.score2}</span>
                  <div className="flex items-center gap-2 flex-1 justify-end">
                    {t2 && <><span className={`text-xs ${m.score2 > m.score1 ? 'text-white font-bold' : 'text-gray-400'}`}>{t2.tag}</span><span className="text-sm">{t2.logo}</span></>}
                  </div>
                </div>
                {m.mvp && (
                  <div className="text-[9px] text-neon-gold mt-1">MVP: {m.mvp}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}