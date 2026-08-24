export interface Team {
  id: string;
  name: string;
  tag: string;
  logo: string;
  players: { ign: string; role: string; rating: number }[];
  wins: number;
  losses: number;
  roundDiff: number;
}

export interface Match {
  id: string;
  round: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  status: 'live' | 'completed' | 'upcoming';
  map: string;
  mvp?: string;
}

export interface PlayerStat {
  ign: string;
  team: string;
  kills: number;
  deaths: number;
  assists: number;
  adr: number;
  hs: number;
  rating: number;
}

export const teams: Team[] = [
  { id: 'T1', name: 'Phoenix Rising', tag: 'PHX', logo: '🔥', players: [
    { ign: 'BlazeMaster', role: 'Entry', rating: 1.32 },
    { ign: 'PhoenixAWP', role: 'AWPer', rating: 1.18 },
    { ign: 'InfernoX', role: 'IGL', rating: 1.24 },
    { ign: 'EmberShot', role: 'Support', rating: 1.08 },
    { ign: 'AshFall', role: 'Lurker', rating: 1.15 },
  ], wins: 13, losses: 4, roundDiff: 42 },
  { id: 'T2', name: 'Shadow Wolves', tag: 'SHW', logo: '🐺', players: [
    { ign: 'DarkHowl', role: 'Entry', rating: 1.28 },
    { ign: 'LunarShot', role: 'AWPer', rating: 1.35 },
    { ign: 'AlphaLead', role: 'IGL', rating: 1.19 },
    { ign: 'NightProwl', role: 'Support', rating: 1.05 },
    { ign: 'SilverFang', role: 'Lurker', rating: 1.12 },
  ], wins: 12, losses: 5, roundDiff: 35 },
  { id: 'T3', name: 'Cyber Dragons', tag: 'CDG', logo: '🐉', players: [
    { ign: 'DragonBreath', role: 'Entry', rating: 1.22 },
    { ign: 'ScaleArmor', role: 'AWPer', rating: 1.14 },
    { ign: 'DragonEye', role: 'IGL', rating: 1.30 },
    { ign: 'TailWhip', role: 'Support', rating: 1.02 },
    { ign: 'WingGuard', role: 'Lurker', rating: 1.10 },
  ], wins: 11, losses: 6, roundDiff: 22 },
  { id: 'T4', name: 'Neon Vipers', tag: 'NVP', logo: '🐍', players: [
    { ign: 'VenomStrike', role: 'Entry', rating: 1.38 },
    { ign: 'FangSnipe', role: 'AWPer', rating: 1.20 },
    { ign: 'CobraCall', role: 'IGL', rating: 1.11 },
    { ign: 'ScaleShot', role: 'Support', rating: 0.98 },
    { ign: 'SlitherIn', role: 'Lurker', rating: 1.06 },
  ], wins: 10, losses: 7, roundDiff: 15 },
  { id: 'T5', name: 'Thunder Gods', tag: 'TGD', logo: '⚡', players: [
    { ign: 'BoltEntry', role: 'Entry', rating: 1.15 },
    { ign: 'LightningAWP', role: 'AWPer', rating: 1.26 },
    { ign: 'ThunderIGL', role: 'IGL', rating: 1.20 },
    { ign: 'StormSupp', role: 'Support', rating: 1.04 },
    { ign: 'CloudWalk', role: 'Lurker', rating: 1.09 },
  ], wins: 10, losses: 7, roundDiff: 8 },
  { id: 'T6', name: 'Ice Specters', tag: 'ICE', logo: '🧊', players: [
    { ign: 'FrostBite', role: 'Entry', rating: 1.10 },
    { ign: 'GlacierAWP', role: 'AWPer', rating: 1.16 },
    { ign: 'Blizzard', role: 'IGL', rating: 1.08 },
    { ign: 'HailStorm', role: 'Support', rating: 0.95 },
    { ign: 'SubZero', role: 'Lurker', rating: 1.02 },
  ], wins: 8, losses: 9, roundDiff: -12 },
  { id: 'T7', name: 'Crimson Blades', tag: 'CRB', logo: '⚔️', players: [
    { ign: 'RedSteel', role: 'Entry', rating: 1.08 },
    { ign: 'ScarletShot', role: 'AWPer', rating: 1.12 },
    { ign: 'BloodHound', role: 'IGL', rating: 1.05 },
    { ign: 'CrimsonAid', role: 'Support', rating: 0.92 },
    { ign: 'BladeRun', role: 'Lurker', rating: 0.99 },
  ], wins: 7, losses: 10, roundDiff: -22 },
  { id: 'T8', name: 'Void Walkers', tag: 'VDW', logo: '🌀', players: [
    { ign: 'VoidEntry', role: 'Entry', rating: 1.04 },
    { ign: 'NullShot', role: 'AWPer', rating: 1.08 },
    { ign: 'AbyssIGL', role: 'IGL', rating: 1.01 },
    { ign: 'ShadowAid', role: 'Support', rating: 0.88 },
    { ign: 'RiftWalk', role: 'Lurker', rating: 0.95 },
  ], wins: 5, losses: 12, roundDiff: -38 },
];

export const matches: Match[] = [
  { id: 'M1', round: 'Quarterfinal 1', team1: 'T1', team2: 'T8', score1: 2, score2: 0, status: 'completed', map: 'Inferno', mvp: 'BlazeMaster' },
  { id: 'M2', round: 'Quarterfinal 2', team1: 'T2', team2: 'T7', score1: 2, score2: 1, status: 'completed', map: 'Mirage', mvp: 'LunarShot' },
  { id: 'M3', round: 'Quarterfinal 3', team1: 'T3', team2: 'T6', score1: 2, score2: 0, status: 'completed', map: 'Nuke', mvp: 'DragonEye' },
  { id: 'M4', round: 'Quarterfinal 4', team1: 'T4', team2: 'T5', score1: 1, score2: 1, status: 'live', map: 'Dust2' },
  { id: 'M5', round: 'Semifinal 1', team1: 'T1', team2: 'T2', score1: 0, score2: 0, status: 'upcoming', map: 'Anubis' },
  { id: 'M6', round: 'Semifinal 2', team1: 'T3', team2: 'T4', score1: 0, score2: 0, status: 'upcoming', map: 'Vertigo' },
  { id: 'M7', round: 'Grand Final', team1: 'TBD', team2: 'TBD', score1: 0, score2: 0, status: 'upcoming', map: 'TBD' },
];

export const playerStats: PlayerStat[] = [
  { ign: 'BlazeMaster', team: 'PHX', kills: 89, deaths: 52, assists: 24, adr: 88.2, hs: 42, rating: 1.32 },
  { ign: 'LunarShot', team: 'SHW', kills: 82, deaths: 48, assists: 18, adr: 92.4, hs: 38, rating: 1.35 },
  { ign: 'VenomStrike', team: 'NVP', kills: 95, deaths: 60, assists: 15, adr: 85.1, hs: 35, rating: 1.38 },
  { ign: 'DragonEye', team: 'CDG', kills: 71, deaths: 45, assists: 32, adr: 78.6, hs: 28, rating: 1.30 },
  { ign: 'InfernoX', team: 'PHX', kills: 65, deaths: 50, assists: 38, adr: 72.3, hs: 25, rating: 1.24 },
  { ign: 'DarkHowl', team: 'SHW', kills: 78, deaths: 55, assists: 20, adr: 80.1, hs: 36, rating: 1.28 },
  { ign: 'DragonBreath', team: 'CDG', kills: 74, deaths: 54, assists: 22, adr: 76.8, hs: 30, rating: 1.22 },
  { ign: 'LightningAWP', team: 'TGD', kills: 68, deaths: 48, assists: 16, adr: 86.5, hs: 40, rating: 1.26 },
  { ign: 'PhoenixAWP', team: 'PHX', kills: 58, deaths: 42, assists: 14, adr: 90.2, hs: 44, rating: 1.18 },
  { ign: 'FangSnipe', team: 'NVP', kills: 62, deaths: 50, assists: 18, adr: 82.3, hs: 32, rating: 1.20 },
];

export function getTeam(id: string): Team | undefined {
  return teams.find(t => t.id === id);
}

export function ratingColor(r: number): string {
  if (r >= 1.25) return '#22c55e';
  if (r >= 1.15) return '#eab308';
  if (r >= 1.05) return '#f97316';
  return '#ef4444';
}
