import type { NextPage } from 'next';
import TournamentHeader from '../components/TournamentHeader';
import TeamStandings from '../components/TeamStandings';
import BracketView from '../components/BracketView';
import PlayerLeaderboard from '../components/PlayerLeaderboard';
import LiveMatchPanel from '../components/LiveMatchPanel';
import MatchFeed from '../components/MatchFeed';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-esports-bg overflow-hidden">
      <TournamentHeader />
      <div className="flex flex-1 min-h-0 p-2 gap-2">
        {/* Left: Standings + Players */}
        <div className="w-72 shrink-0 flex flex-col gap-2">
          <div className="flex-1 min-h-0">
            <TeamStandings />
          </div>
          <div className="flex-1 min-h-0">
            <PlayerLeaderboard />
          </div>
        </div>
        {/* Center: Live Match + Feed */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div className="flex-[2] min-h-0">
            <LiveMatchPanel />
          </div>
          <div className="flex-1 min-h-0">
            <MatchFeed />
          </div>
        </div>
        {/* Right: Bracket */}
        <div className="w-72 shrink-0">
          <BracketView />
        </div>
      </div>
    </div>
  );
};

export default Home;