export interface Option {
  label: string;
  value: string;
}

export function createOption(inp: string) : Option {
  const temp: Option = {
    label: inp,
    value: inp
  }
  return temp
}

export function createOptions(arr: string[]) : Option[] {
  return arr.map(name => {
    const temp: Option = {
      label: name,
      value: name
    }
    return temp;
  })
}

export const url = `https://mpstats.timmi6790.de`
export const imageApiUrl = `https://crafatar.com`
export const mojangApiUrl = `https://api.mojang.com`
export const measurementID = `G-TXQGWGVKYP`

export const statNamesArr: Option[] = [
    { value: 'Wins', label: 'Wins' },
    { value: 'SecondPlace', label: 'Second Place' },
    { value: 'ThirdPlace', label: 'Third Place' },
    { value: 'Losses', label: 'Losses' },
    { value: 'Deaths', label: 'Deaths' },
    { value: 'GemsEarned', label: 'Gems Earned' },
    { value: 'TraveledBlocks', label: 'Traveled Blocks' },
    { value: 'ExpEarned', label: 'Exp Earned' },
    { value: 'Paralympics', label: 'Paralympics' },
    { value: 'WinsSkylands', label: 'Wins Skylands' },
    { value: 'WinsFen', label: 'Wins Fen' },
    { value: 'WinsAcropolis', label: 'Wins Acropolis' },
    { value: 'WinsZodiac', label: 'Wins Zodiac' },
    { value: 'WinsUtopia', label: 'Wins Utopia' },
    { value: 'WinsSandstorm', label: 'Wins Sandstorm' },
  ]

export const boards = ["Daily", "Weekly", "Monthly", "Yearly", "All"]

export const categories = [
  {
    categoryName: "Global",
    games: [ 
      'Global', 'Track'
    ]
    },
  {
    categoryName: "Arcade",
    games: [
      'TurfWars',        'MilktheCow',
      'MicroBattle',     'BombLobbers',
      'BaconBrawl',      'SuperPaintball',
      'DeathTag',        'DragonEscape',
      'Evolution',       'NanoGames',
      'TugofWool',       'WitherAssault',
      'Runner',          'SpeedBuilders',
      'SneakyAssassins', 'OneintheQuiver',
      'MonsterMaze',     'SheepQuest',
      'SuperSpleef',     'Gladiators',
      'SquidShooter',    'Snake',
      'Dragons'
    ]
  },
  {
    categoryName: "Champion",
    games: [ 
      'ChampionsDomination', 'ChampionsCTF', 'Clans' 
    ]
    },
    {
      categoryName: "Survival",
      games: [
        'CakeWarsStandard',
        'SurvivalGames',
        'SurvivalGamesTeams',
        'Skywars',
        'CakeWarsDuos',
        'SkywarsTeams'
      ]
      },
    {
    categoryName: "Classic",
    games: [
      'MasterBuilders',
      'MineStrike',
      'SuperSmashMobs',
      'SuperSmashMobsTeams',
      'BlockHunt',
      'DrawMyThing',
      'TheBridges',
      'UHCRemastered'
    ]
    },
    {
    categoryName: "MPS Only",
    games: [
      'SnowFight',
      'HeroesofGWEN',
      'CastleSiege',
      'CastleAssault',
      'AlienInvasion',
      'Wizards'
    ]
    },
    {
    categoryName: "Removed",
    games: [
      'TypeWars',
      'Skyfall',
      'UltraHardcore',
      'BawkBawkBattles',
      'ChampionsTDM',
      'CastleAssaultTDM',
      'MCLeague',
      'OneintheQuiverPayload',
      'MineplexEvent',
      'SkyfallTeams',
      'UltraHardcoreSolo',
      'GemHunters',
      'Chest',
      'DuckHunt',
      'DragonEscapeTeams',
      'Brawl',
      'HeroesofGWENTraining',
      'LaserTag',
      'CanvasWarfare',
      'GemWars',
      'DuckStompers',
      'Hoops',
      'RocketMadness',
      'Juggernaut',
      'KingOfTheHill',
      'Competitive1',
      'ScaryVillage',
      'OneInTheQuiverTeams',
      'BouncyBalls',
      'MissileWars',
      'ClimbTime',
      'SuperSmashMobsDomination',
      'StompingNaughtyDucks',
      'BuildWars',
      'SnowSprint',
      'SuperSpleefTeams',
      'SearchandDestroy',
      'Starfighters',
      'SuperSmashMobsTraining',
      'DragonsTeams',
      'Endurance',
      'SpaceWars',
      'ZombieSurvival',
      'ABarbariansLife',
      'PlexQuest',
      'StrikeGames',
      'MavericksMasterBuilders',
      'GladiatorArena',
      'UltraHardcoreSoloSpeed',
      'Gravity',
      'WitherBrawl',
      'UltraHardcoreTeamsSpeed'
    ]
    },
    {
      categoryName: "Meme",
      games: [ 'Area51Raid' ]
      },
    {
    categoryName: "Season",
    games: [
      'HalloweenHorror',
      'RoseRush',
      'ChristmasChaos',
      'ChristmasChaosII',
      'HalloweenHavoc',
      'ValentinesVendetta',
      'BattleRoyale',
      'HalloweenHavocOld'
    ]
    },
    {
    categoryName: "Unreleased",
    games: [
      'DragonRiders',
      'CraftAgainstHumanity',
      'SuperStacker',
      'MonsterLeague',
      'SlimeSuckers',
      'MineWare',
      'Horseback',
      'HoleInTheWall',
      'BossBattles'
    ]
    }
  ]

export const stats = {
  MilktheCow: [
    'SecondPlace',
    'GemsEarned',
    'Deaths',
    'ExpEarned',
    'Assists',
    'Losses',
    'ThirdPlace',
    'Kills',
    'Wins'
  ],
  MicroBattle: [
    'Losses',
    'ExpEarned',
    'Assists',
    'Wins',
    'GemsEarned',
    'Deaths',
    'Annihilation',
    'Kills'
  ],
  BaconBrawl: [
    'Losses',
    'ExpEarned',
    'Kills',
    'ThirdPlace',
    'SecondPlace',
    'PigsInBlankets',
    'Deaths',
    'Wins',
    'GemsEarned',
    'Assists'
  ],
  WitherAssault: [
    'Assists',
    'Losses',
    'Deaths',
    'GemsEarned',
    'ExpEarned',
    'Wins',
    'Kills'
  ],
  DeathTag: [
    'GemsEarned',  'SecondPlace',
    'Losses',      'Wins',
    'ExpEarned',   'Assists',
    'ComeAtMeBro', 'Kills',
    'ThirdPlace',  'Deaths'
  ],
  BombLobbers: [
    'ProfessionalLobber',
    'ExpEarned',
    'Assists',
    'GemsEarned',
    'UltimateKiller',
    'Wins',
    'Kills',
    'BlastProof',
    'JellySkin',
    'Losses',
    'Deaths'
  ],
  SquidShooter: [
    'Deaths',
    'Assists',
    'Kills',
    'Wins',
    'ExpEarned',
    'Losses',
    'GemsEarned'
  ],
  TugofWool: [
    'GemsEarned',
    'ExpEarned',
    'Losses',
    'Wins',
    'Kills',
    'Deaths',
    'Assists'
  ],
  SuperPaintball: [
    'Speedrunner',     'Losses',
    'Deaths',          'GemsEarned',
    'Kills',           'Wins',
    'ExpEarned',       'KillingSpree',
    'LastStand',       'Assists',
    'BestWinStreak',   'Medic',
    'FlawlessVictory'
  ],
  SheepQuest: [
    'Losses',     'Thief',
    'ExpEarned',  'AnimalRescue',
    'Kills',      'Selfish',
    'Wins',       'Deaths',
    'GemsEarned', 'Assists'
  ],
  Snake: [
    'GemsEarned', 'SecondPlace',
    'Wins',       'Kills',
    'ChooChoo',   'ThirdPlace',
    'Deaths',     'Cannibal',
    'Losses',     'SlimySheep',
    'ExpEarned'
  ],
  Evolution: [
    'Deaths',       'SecondPlace',
    'ThirdPlace',   'AbilityAssassin',
    'Losses',       'Assists',
    'ExpEarned',    'Rampage',
    'Kills',        'GemsEarned',
    'PerfectGame',  'NoEvolve5U',
    'MeleeMonster', 'StealthMastah',
    'Wins'
  ],
  DragonEscape: [
    'Losses',      'Paralympics',
    'Deaths',      'TraveledBlocks',
    'Wins',        'WinsFen',
    'ExpEarned',   'WinsSkylands',
    'SecondPlace', 'WinsZodiac',
    'WinsUtopia',  'WinsAcropolis',
    'ThirdPlace',  'WinsSandstorm',
    'GemsEarned'
  ],
  SpeedBuilders: [
    'Wins',
    'FirstBuild',
    'BlocksPlaced',
    'ThirdPlace',
    'GemsEarned',
    'Dependable',
    'ExpEarned',
    'Losses',
    'SpeediestBuilderizer',
    'SecondPlace',
    'Perfectionist'
  ],
  SuperSpleef: [
    'Deaths',
    'Losses',
    'SecondPlace',
    'ExpEarned',
    'GemsEarned',
    'ThirdPlace',
    'Demolitionist',
    'Wins'
  ],
  TurfWars: [
    'GemsEarned',
    'BlocksPlaced',
    'Wins',
    'Deaths',
    'Kills',
    'Losses',
    'ExpEarned',
    'BlocksBroken',
    'BehindEnemyLines',
    'TheComeback',
    'Assists',
    'TheShreddinator'
  ],
  NanoGames: [
    'Kills',      'Wins',
    'ExpEarned',  'SecondPlace',
    'Deaths',     'Losses',
    'CopyKitty',  'GemsEarned',
    'ThirdPlace', 'BestFriends',
    'Quick',      'Assists',
    'Notdeadyet', 'Player1'
  ],
  MonsterMaze: [
    'GemsEarned',  'Pilot',
    'ThirdPlace',  'Ninja',
    'Deaths',      'DieAlready',
    'SpeedyMcGee', 'SecondPlace',
    'ExpEarned',   'Wins',
    'Losses'
  ],
  OneintheQuiver: [
    'GemsEarned',     'ThirdPlace',
    'ThePerfectGame', 'ExpEarned',
    'Assists',        'Kills',
    'Losses',         'SecondPlace',
    'Deaths',         'Wins',
    'SharpShooter',   'WhatsABow'
  ],
  Runner: [
    'ExpEarned',
    'SecondPlace',
    'GemsEarned',
    'MarathonRunner',
    'Deaths',
    'Losses',
    'ThirdPlace',
    'Wins'
  ],
  Dragons: [
    'ThirdPlace',
    'Losses',
    'SecondPlace',
    'Deaths',
    'Sparklez',
    'Wins',
    'Kills',
    'ExpEarned',
    'GemsEarned'
  ],
  SneakyAssassins: [
    'Incompetence', 'SecondPlace',
    'ExpEarned',    'TheMastersMaster',
    'Wins',         'Kills',
    'ISeeYou',      'MasterAssassin',
    'GemsEarned',   'Losses',
    'Deaths',       'ThirdPlace',
    'Assists'
  ],
  Gladiators: [
    'GemsEarned',  'ThirdPlace',
    'Assists',     'Flawless',
    'Untouchable', 'SwiftKill',
    'Wins',        'Kills',
    'Losses',      'ExpEarned',
    'Precision',   'Brawler',
    'SecondPlace', 'Deaths'
  ],
  Clans: [
    'FieldOresMined',
    'MobKills',
    'Kills',
    'BossKills',
    'TimePlaying',
    'UndeadCityChestsOpened',
    'OwnedLegendaries',
    'Deaths',
    'GoldEarned'
  ],
  ChampionsDomination: [
    'TheLongestShot',
    'Wins',
    'Assists',
    'Assassination',
    'ExpEarned',
    'Earthquake',
    'Kills',
    'Losses',
    'GemsEarned',
    'Deaths',
    'MassElectrocution'
  ],
  ChampionsCTF: [
    'ExpEarned',
    'Deaths',
    'Assassination',
    'GemsEarned',
    'Clutch',
    'Kills',
    'TheLongestShot',
    'Earthquake',
    'StickyFingers',
    'ChampionofChampions',
    'MassElectrocution',
    'Wins',
    'Assists',
    'Losses'
  ],
  UHCRemastered: [
    'Assists',     'Kills',
    'LuckyMiner',  'Iwillsurvive',
    'TheLie',      'ExpEarned',
    'SecondPlace', 'Deaths',
    'GemsEarned',  'Losses',
    'ThirdPlace',  'Wins',
    'Useless'
  ],
  MineStrike: [
    'Wins',          'KillingSpree',
    'Blindfolded',   'Ace',
    'Assists',       'Kaboom',
    'ExpEarned',     'GemsEarned',
    'BOOM!HEADSHOT', 'Losses',
    'ClutchorKick',  'Assassination',
    'Deaths',        'Kills'
  ],
  MasterBuilders: [
    'BlocksBroken',
    'ThirdPlace',
    'BlocksPlaced',
    'Losses',
    'Wins',
    'ExpEarned',
    'GemsEarned',
    'SecondPlace'
  ],
  BlockHunt: [
    'GemsEarned', 'Losses',
    'ThirdPlace', 'MeowMeowMeowMeow',
    'HunterWins', 'HunterOfTheYear',
    'Assists',    'Kills',
    'ExpEarned',  'BadHider',
    'Deaths',     'HunterKiller',
    'HiderWins',  'SecondPlace'
  ],
  DrawMyThing: [
    'ExpEarned',
    'SuccessfulGuesses',
    'PureLuck',
    'SecondPlace',
    'Losses',
    'MrSquiggle',
    'KeenEye',
    'Wins',
    'ThirdPlace',
    'GemsEarned'
  ],
  TheBridges: [
    'FortuneBomber',
    'GemsEarned',
    'Kills',
    'ExpEarned',
    'Wins',
    'Assists',
    'Losses',
    'Rampage',
    'FoodfortheMasses',
    'Deaths',
    'DeathBomber',
    'Sniper'
  ],
  SuperSmashMobs: [
    'Kills',           'ExpEarned',
    'RecoveryMaster',  'GemsEarned',
    'Deaths',          'Assists',
    '1v3',             'TripleKill',
    'FreeKitsForever', 'Losses',
    'SecondPlace',     'ThirdPlace',
    'Wins',            'MLGPro'
  ],
  SuperSmashMobsTeams: [
    'RecoveryMaster',
    'Assists',
    'Losses',
    'Deaths',
    '1v3',
    'ExpEarned',
    'FreeKitsForever',
    'Kills',
    'MLGPro',
    'GemsEarned',
    'TripleKill',
    'Wins'
  ],
  Track: [
    'SweetTooth',
    'Lucky',
    'HolidayCheer',
    'PartyAnimal',
    'Unlucky',
    'AdventCalendar2019',
    'TreasureHunter',
    'Peaceful',
    'GemsCollector',
    'Warrior'
  ],
  Global: [
    'GamesPlayed',
    'WeeklyMissions',
    'DailyMissions',
    'EventMissions',
    'ExpEarned',
    'GemsEarned',
    'DailyRewards',
    'IngameTime',
    'HubTime',
    'ClansDailyRewards',
    'DailyVotes',
    'CrownsEarned',
    'Valentine2016GiftsRecieved',
    'Valentine2016GiftsGiven'
  ],
  Area51Raid: [
    'ExpEarned',
    'Losses',
    'Wins',
    'GemsEarned',
    'Deaths',
    'Assists',
    'Kills',
    'FirstBlood',
    'ChopperAcquired',
    'PatriotAct'
  ],
  CastleAssault: [
    'ArcherKills',
    'CrownsEarned',
    'Deaths',
    'Losses',
    'ExpEarned',
    'TankKills',
    'Wins',
    'Kills',
    'AlchemistKills',
    'Assists',
    'FirstBlood',
    'Killstreak',
    'FighterKills',
    'DemolitionistKills'
  ],
  SnowFight: [
    'Deaths',
    'Kills',
    'Assists',
    'GemsEarned',
    'Wins',
    'ExpEarned',
    'Losses'
  ],
  HeroesofGWEN: [
    'WinsHunter',        'ExpEarnedMage',
    'ExpEarnedWarrior',  'ExpEarnedHunter',
    'WinsWarrior',       'WinsMage',
    'WinsAssassin',      'Kills',
    'ExpEarnedAssassin', 'Wins',
    'GoldEarned',        'Assists',
    'Deaths',            'GemsEarned',
    'ExpEarned',         'Losses'
  ],
  Wizards: [
    'Losses',
    'Kills',
    'Assists',
    'Wins',
    'Deaths',
    'GemsEarned',
    'ExpEarned'
  ],
  AlienInvasion: [ 'Wins', 'GemsEarned', 'Deaths', 'Losses', 'ExpEarned' ],
  CastleSiege: [
    'Losses',                'SlashOrBurn',
    'GemsEarned',            'CanineRevenge',
    'RoyalGuard',            'FORTHEKING',
    'EquestrianElimination', 'DefusalSquadron',
    'Assassin',              'FirstBlood',
    'Deaths',                'BloodThirsty',
    'NotEvenAScratch',       'Kingslayer',
    'Kills',                 'Assists',
    'Wins',                  'ExpEarned'
  ], 
  TypeWars: [
    'GemsEarned', 'Demon',
    'Wins',       'Losses',
    'IngameTime', 'Perfectionist',
    'Nuke',       'MinionKills',
    'Hoarder',    'Dumbledont',
    'ExpEarned'
  ],
  GemHunters: [ 'Kills', 'GemsEarned', 'QuestsCompleted', 'ChestsOpened' ],
  MineplexEvent: [ 'GemsEarned', 'Losses', 'Wins', 'ExpEarned' ],
  Skyfall: [
    'ExpEarned',
    'GemsEarned',
    'Losses',
    'Wins',
    'LootHoarder',
    'IloveBoosterRings',
    'Assists',
    'LightWeight',
    'Bloodlust',
    'Aeronaught',
    'Kills',
    'Deaths'
  ],
  Brawl: [
    'ExpEarned',
    'Deaths',
    'Wins',
    'Assists',
    'Unstoppable',
    'Kills',
    'GemsEarned',
    'Losses'
  ],
  DuckHunt: [ 'Wins', 'Losses', 'GemsEarned', 'ExpEarned', 'Deaths' ],
  ChampionsTDM: [
    'Deaths',
    'ExpEarned',
    'Wins',
    'MassElectrocution',
    'FlawlessVictory',
    'Earthquake',
    'Ace',
    'Kills',
    'Losses',
    'TheLongestShot',
    'Assassination',
    'GemsEarned',
    'Assists'
  ],
  UltraHardcore: [
    'Kills',        'Losses',
    'Wins',         'Deaths',
    'ExpEarned',    'LuckyMiner',
    'Useless',      'FineDining',
    'Iwillsurvive', 'GemsEarned',
    'Assists'
  ],
  SkyfallTeams: [
    'Kills',
    'Wins',
    'IloveBoosterRings',
    'LootHoarder',
    'Losses',
    'ExpEarned',
    'Bloodlust',
    'Assists',
    'Deaths',
    'LightWeight',
    'GemsEarned',
    'Aeronaught'
  ],
  Chest: [
    'Christmas',   'Spring',
    'StPatricks',  'Love',
    'Mythical',    'Ancient',
    'Gingerbread', 'Freedom',
    'Thankful',    'Haunted',
    'HOG',         'TrickOrTreat',
    'Omega',       'Old',
    'Minestrike',  'Illuminated'
  ],
  GemWars: [],
  LaserTag: [ 'GemsEarned', 'ExpEarned', 'Wins', 'Losses' ],
  CanvasWarfare: [ 'Wins', 'Losses', 'GemsEarned', 'ExpEarned', 'Deaths' ],
  UltraHardcoreSolo: [
    'Losses',
    'Deaths',
    'Kills',
    'GemsEarned',
    'ExpEarned',
    'Wins',
    'Assists'
  ],
  BawkBawkBattles: [
    'DragonKing',     'BouncingShadow',
    'ExpEarned',      'EliteArcher',
    'GemsEarned',     'TagMaster',
    'SurfUp',         'PinataMaster',
    'PixelNinja',     'MilkMan',
    'SpeedyBuilders', 'Deaths',
    'Kills',          'Losses',
    'Wins',           'Veteran',
    'Assists'
  ],
  DragonEscapeTeams: [ 'Deaths', 'GemsEarned', 'Losses', 'Wins', 'ExpEarned' ],
  MCLeague: [
    'ExpEarned',     'GemsEarned',
    'Wins',          'HeadHunter',
    'AltarBuilder',  'SavingUp',
    'TowerDefender', 'Deaths',
    'Kills',         'FirstStrike',
    'Assists',       'Losses'
  ],
  CastleAssaultTDM: [
    'DemolitionistKills',
    'ArcherKills',
    'Wins',
    'Deaths',
    'CrownsEarned',
    'Assists',
    'FighterKills',
    'ExpEarned',
    'Losses',
    'Killstreak',
    'FirstBlood',
    'Kills',
    'TankKills'
  ],
  Hoops: [ 'Losses', 'GemsEarned', 'ExpEarned', 'Wins' ],
  HeroesofGWENTraining: [ 'GoldEarned' ],
  DuckStompers: [ 'Deaths', 'Wins', 'GemsEarned', 'ExpEarned', 'Losses' ],
  OneintheQuiverPayload: [
    'Blossom',     'Wins',
    'ExpEarned',   'Losses',
    'Unstoppable', 'Assists',
    'Deaths',      'Kills',
    'GemsEarned',  'Bow',
    'Assassin'
  ],
  ScaryVillage: [ 'ExpEarned', 'Wins', 'Losses', 'GemsEarned' ],
  Juggernaut: [ 'Kills', 'GemsEarned', 'Deaths', 'Assists' ],
  RocketMadness: [ 'GemsEarned', 'Deaths', 'ExpEarned', 'Kills', 'Wins', 'Losses' ],
  KingOfTheHill: [
    'GemsEarned',
    'ExpEarned',
    'Deaths',
    'Assists',
    'Wins',
    'Losses',
    'Kills'
  ],
  Competitive1: [ 'Wins', 'ExpEarned', 'Losses', 'GemsEarned', 'Deaths' ],
  ClimbTime: [
    'Wins',
    'Losses',
    'Kills',
    'GemsEarned',
    'ExpEarned',
    'Assists',
    'Deaths'
  ],
  BouncyBalls: [ 'Losses', 'Wins', 'GemsEarned', 'ExpEarned', 'Deaths' ],
  SnowSprint: [ 'ExpEarned', 'Deaths', 'Wins', 'Losses', 'GemsEarned' ],
  StompingNaughtyDucks: [ 'GemsEarned', 'Wins', 'Deaths', 'Losses', 'ExpEarned' ],
  PlexQuest: [ 'Wins', 'GemsEarned', 'Losses', 'ExpEarned', 'Deaths' ],
  SuperSmashMobsDomination: [],
  ABarbariansLife: [
    'BlocksBroken',
    'Deaths',
    'Losses',
    'Assists',
    'Kills',
    'Wins',
    'GemsEarned',
    'ExpEarned'
  ],
  BuildWars: [ 'ExpEarned', 'GemsEarned', 'Losses' ],
  SuperSpleefTeams: [
    'BlocksBroken',
    'Losses',
    'Wins',
    'Deaths',
    'ExpEarned',
    'GemsEarned'
  ],
  SpaceWars: [ 'ExpEarned', 'Deaths', 'GemsEarned', 'Losses', 'Wins' ],
  StrikeGames: [
    'Losses',
    'Kills',
    'BestWinStreak',
    'ExpEarned',
    'Wins',
    'GemsEarned',
    'Deaths'
  ],
  UltraHardcoreTeamsSpeed: [
    'GemsEarned',
    'Deaths',
    'ExpEarned',
    'Losses',
    'Wins',
    'Kills',
    'Assists'
  ],
  Endurance: [
    'Wins',
    'Losses',
    'GemsEarned',
    'ExpEarned',
    'Deaths',
    'Kills',
    'Assists'
  ],
  WitherBrawl: [ 'Wins', 'Losses', 'Kills', 'GemsEarned', 'ExpEarned', 'Deaths' ],
  SearchandDestroy: [
    'Deaths',
    'Losses',
    'Wins',
    'Assists',
    'Kills',
    'ExpEarned',
    'GemsEarned'
  ],
  GladiatorArena: [
    'GemsEarned',
    'Wins',
    'Deaths',
    'Losses',
    'Kills',
    'Assists',
    'ExpEarned'
  ],
  UltraHardcoreSoloSpeed: [
    'Kills',
    'Losses',
    'Assists',
    'Deaths',
    'Wins',
    'GemsEarned',
    'ExpEarned'
  ],
  MissileWars: [
    'Kills',
    'GemsEarned',
    'Wins',
    'Losses',
    'ExpEarned',
    'Deaths',
    'Assists'
  ],
  Gravity: [ 'GemsEarned', 'Wins', 'Deaths', 'Losses', 'ExpEarned' ],
  MavericksMasterBuilders: [
    'BlocksBroken',
    'ExpEarned',
    'BlocksPlaced',
    'GemsEarned',
    'Wins',
    'Losses'
  ],
  ZombieSurvival: [ 'Wins', 'Assists', 'Deaths', 'Losses', 'Kills', 'GemsEarned' ],
  Starfighters: [ 'Wins', 'ExpEarned', 'GemsEarned' ],
  OneInTheQuiverTeams: [
    'ExpEarned',
    'Deaths',
    'GemsEarned',
    'Kills',
    'Assists',
    'Losses',
    'Wins'
  ],
  SuperSmashMobsTraining: [ 'Kills', 'Assists', 'Deaths', 'GemsEarned' ],
  DragonsTeams: [ 'Losses', 'GemsEarned', 'Wins', 'ExpEarned' ],
  BattleRoyale: [
    'Kills',
    'GemsEarned',
    'ExpEarned',
    'Losses',
    'Wins',
    'Deaths',
    'Assists'
  ],
  ChristmasChaos: [ 'Deaths', 'ExpEarned', 'GemsEarned', 'Wins', 'Kills', 'Losses' ],
  ValentinesVendetta: [
    'Losses',
    'Assists',
    'Deaths',
    'GemsEarned',
    'ExpEarned',
    'Wins',
    'Kills'
  ],
  HalloweenHorror: [ 'Deaths', 'GemsEarned', 'Losses', 'ExpEarned', 'Wins' ],
  HalloweenHavocOld: [
    'SecondPlace',
    'Deaths',
    'ExpEarned',
    'Losses',
    'Wins',
    'GemsEarned',
    'ThirdPlace',
    'Kills'
  ],
  HalloweenHavoc: [
    'GemsEarned',
    'ExpEarned',
    'Losses',
    'Wins',
    'Deaths',
    'ThirdPlace',
    'Kills',
    'SecondPlace',
    'ChallengerWins',
    'Speedruns'
  ],
  ChristmasChaosII: [ 'Deaths', 'ExpEarned', 'Losses', 'Wins', 'Kills', 'GemsEarned' ],
  RoseRush: [
    'ExpEarned',
    'Wins',
    'Assists',
    'GemsEarned',
    'Losses',
    'Deaths',
    'Kills',
    'BestWinStreak'
  ],
  SurvivalGames: [
    'SkeletalArmy',  'ExpEarned',
    'ChestsOpened',  'Bloodlust',
    'LootHoarder',   'LightWeight',
    'SecondPlace',   'Losses',
    'BestWinStreak', 'Assists',
    'Deaths',        'ThirdPlace',
    'Wins',          'GemsEarned',
    'Kills'
  ],
  SurvivalGamesTeams: [
    'Wins',          'SkeletalArmy',
    'BestWinStreak', 'Assists',
    'GemsEarned',    'Kills',
    'Deaths',        'Losses',
    'Bloodlust',     'ChestsOpened',
    'ExpEarned',     'LootHoarder',
    'LightWeight'
  ],
  Skywars: [
    'Kills',        'Wins',
    'BareMinimum',  'Losses',
    'SecondPlace',  'TNTHoarder',
    'Assists',      'Whoneedsasword',
    'Deaths',       'BestWinStreak',
    'ExpEarned',    'ThirdPlace',
    'ChestsOpened', 'GemsEarned',
    'LeftForDead',  'NoKills',
    'MasterBomber', 'Survivalist'
  ],
  CakeWarsDuos: [
    'BigAppetite',        'LastCrumb',
    'BestWinStreak',      'ThisGameHasCakes',
    'LastLaugh',          'Losses',
    'YouYouYouandYouDie', 'StopPunchingMe',
    'TeamPlayer',         'Deaths',
    'I<3CapturePoints',   'Kills',
    'Assists',            'FinalKills',
    'Greedy',             'LoveNotWar',
    'GottaGofast',        'ExpEarned',
    'Starving',           'ColdBakedKiller',
    'ChestsOpened',       'GemsEarned',
    'Wins',               'YouCallThatAChallenge',
    'GetGood',            'TheFloorIsLava'
  ],
  CakeWarsStandard: [
    'YouCallThatAChallenge', 'Starving',
    'LastLaugh',             'YouYouYouandYouDie',
    'ColdBakedKiller',       'Kills',
    'BestWinStreak',         'Deaths',
    'LoveNotWar',            'ExpEarned',
    'ChestsOpened',          'BigAppetite',
    'StopPunchingMe',        'Assists',
    'GottaGofast',           'I<3CapturePoints',
    'ThisGameHasCakes',      'FinalKills',
    'Greedy',                'TeamPlayer',
    'Losses',                'Wins',
    'GemsEarned',            'TheFloorIsLava',
    'LastCrumb',             'GetGood'
  ],
  SkywarsTeams: [
    'Whoneedsasword', 'BestWinStreak',
    'ChestsOpened',   'ExpEarned',
    'Assists',        'BareMinimum',
    'LeftForDead',    'GemsEarned',
    'Kills',          'Losses',
    'Deaths',         'MasterBomber',
    'TNTHoarder',     'Wins',
    'Survivalist'
  ],
  CraftAgainstHumanity: [ 'Losses', 'Wins', 'GemsEarned', 'ExpEarned' ],
  DragonRiders: [ 'GemsEarned', 'Losses', 'ExpEarned', 'Wins' ],
  BossBattles: [ 'GemsEarned', 'Wins', 'Deaths', 'Kills', 'ExpEarned' ],
  Horseback: [
    'Deaths',
    'Assists',
    'Kills',
    'GemsEarned',
    'ExpEarned',
    'Wins',
    'Losses'
  ],
  SlimeSuckers: [
    'Losses',
    'Wins',
    'ExpEarned',
    'GemsEarned',
    'SlimeSuckers',
    'Deaths',
    'Kills'
  ],
  SuperStacker: [ 'ExpEarned', 'Losses', 'Wins', 'GemsEarned' ],
  HoleInTheWall: [ 'GemsEarned', 'Wins', 'Losses', 'Deaths', 'ExpEarned' ],
  MineWare: [
    'TagMaster', 'PinataMaster',
    'Kangaroo',  'LauraCraft',
    'SurfUp',    'MilkMan',
    'Kills',     'Assists',
    'Deaths',    'ExpEarned',
    'Losses',    'GemsEarned',
    'Wins'
  ],
  MonsterLeague: [ 'Losses', 'GemsEarned', 'Deaths', 'ExpEarned', 'Wins' ]
}