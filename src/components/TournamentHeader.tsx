import { teams, matches } from '../data/tournament';

export default function TournamentHeader() {
  const liveMatch = matches.find(m => m.status === 'live');
  const t1 = liveMatch ? teams.find(t => t.id === liveMatch.team1) : null;
  const t2 = liveMatch ? teams.find(t => t.id === liveMatch.team2) : null;

  return (
    <header className="h-12 bg-esports-card border-b border-esports-border flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-neon-purple font-extrabold text-sm tracking-wider animate-neon_glow">NEXUS ARENA</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400 text-[10px]">CHAMPIONSHIP 2024</span>
      </div>
      {liveMatch && t1 && t2 ? (
        <div className="flex items-center gap-3">
          <span className="text-white text-xs font-bold">{t1.tag}</span>
          <span className="text-neon-gold font-bold">{liveMatch.score1} - {liveMatch.score2}</span>
          <span className="text-white text-xs font-bold">{t2.tag}</span>
          <span className="text-gray-600">|</span>
          <span className="text-[10px] text-neon-pink">LIVE</span>
          <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse" />
        </div>
      ) : (
        <span className="text-gray-500 text-xs">No live match</span>
      )}
      <div className="flex items-center gap-3 text-[10px] text-gray-500">
        <span>VIEWERS: <span className="text-neon-cyan">24.8K</span></span>
        <span>|</span>
        <span>PRIZE POOL: <span className="text-neon-gold">$50,000</span></span>
      </div>
    </header>
  );
}