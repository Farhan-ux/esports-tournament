const feedEvents = [
  { time: '14:32', event: 'Round 24', detail: 'VenomStrike ace clutch! 4 kills in B site retake', type: 'highlight' },
  { time: '14:28', event: 'Round 23', detail: 'BoltEntry opening pick through smoke mid', type: 'kill' },
  { time: '14:24', event: 'Round 22', detail: 'LightningAWP AWP double on A site hold', type: 'kill' },
  { time: '14:20', event: 'Timeout', detail: 'Shadow Wolves called tactical timeout', type: 'system' },
  { time: '14:18', event: 'Round 21', detail: 'Phoenix Rising executes B split perfectly', type: 'round' },
  { time: '14:12', event: 'Round 20', detail: 'BlazeMaster 3K entry on A site', type: 'kill' },
  { time: '14:08', event: 'Round 19', detail: 'Thunder Gods force buy succeeds in B', type: 'round' },
  { time: '14:02', event: 'Round 18', detail: 'LunarShot noscope kill on eco round', type: 'highlight' },
];

const typeColors: Record<string, string> = {
  highlight: '#eab308',
  kill: '#ef4444',
  system: '#6b7280',
  round: '#a855f7',
};

export default function MatchFeed() {
  return (
    <div className="esports-panel h-full flex flex-col">
      <div className="esports-header">
        <span className="esports-label">Match Feed</span>
        <span className="text-[10px] text-gray-500">AUTO</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {feedEvents.map((e, i) => (
          <div key={i} className="px-3 py-1.5 border-b border-esports-border/20">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-gray-600 w-10 shrink-0">{e.time}</span>
              <div className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: typeColors[e.type] }} />
              <span className="text-[9px] text-gray-400 shrink-0">{e.event}</span>
              <span className="text-[11px] text-gray-300">{e.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
