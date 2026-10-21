export type GameSlot = {
  id: number;
  name: string;
  imageUrl: string;
  gameUrl: string;
  embedUrl?: string;
};

/**
 * Connect your games here.
 *
 * Example:
 * 1: {
 *   id: 1,
 *   name: 'My First Game',
 *   imageUrl: '/games/my-first-game/cover.png',
 *   gameUrl: '/games/my-first-game/index.html',
 * },
 *
 * Put the matching folder inside public/games. Leave the other slots empty
 * until you are ready to publish them.
 */
const configuredGames: Partial<Record<number, GameSlot>> = {
  1: {
    id: 1,
    name: "World's Hardest Game 1",
    imageUrl: "/games/WorldshardestGame1/cover.svg",
    gameUrl: "/games/WorldshardestGame1/index.html",
  },
  2: {
    id: 2,
    name: "World's Hardest Game 2",
    imageUrl: "/games/WorldshardestGame2/cover.svg",
    gameUrl: "/games/WorldshardestGame2/index.html",
  },
  3: {
    id: 3,
    name: "World's Hardest Game 3",
    imageUrl: "/games/WorldshardestGame3/cover.svg",
    gameUrl: "/games/WorldshardestGame3/index.html",
  },
  4: {
    id: 4,
    name: "World's Hardest Game 4",
    imageUrl: "/games/WorldshardestGame4/cover.svg",
    gameUrl: "/games/WorldshardestGame4/index.html",
  },
  5: {
    id: 5,
    name: "Slope",
    imageUrl: "/games/Slope/cover.jpg",
    gameUrl: "/games/Slope/index.html",
    embedUrl: "https://github.com/woogiewoo2011-byte/MathHomeWorkHelp/tree/main/slope",
  },
  6: {
    id: 6,
    name: "Slope2",
    imageUrl: "/games/Slope2/cover.jpg",
    gameUrl: "/games/Slope2/index.html",
    embedUrl: "https://sciencemathedu.github.io/slope2/",
  },
  7: {
    id: 7,
    name: "Eggy Car",
    imageUrl: "/games/EggyCar/cover.jpg",
    gameUrl: "/games/EggyCar/index.html",
    embedUrl: "https://sciencemathedu.github.io/eggycar/",
  },
  8: {
    id: 8,
    name: "BitLife",
    imageUrl: "/games/BitLife/logo.png",
    gameUrl: "/games/BitLife/index.html",
  },
  9: {
    id: 9,
    name: "Five Nights at Freddy's 1",
    imageUrl: "/games/FNAF1/cover.jpg",
    gameUrl: "/games/FNAF1/index.html",
  },
  10: {
    id: 10,
    name: "Five Nights at Freddy's 2",
    imageUrl: "/games/FNAF2/cover.jpg",
    gameUrl: "/games/FNAF2/index.html",
    },
    11: {
      id: 11,
      name: "",
      imageUrl: "/games//cover.jpg",
      gameUrl: "/games//index.html",
  },
  12: {
    id: 12,
    name: "Five Nights at Freddy's 4",
    imageUrl: "/games/FNAF4/cover.jpg",
    gameUrl: "/games/FNAF4/index.html",
  },
  13: {
    id: 13,
    name: "Crossy Road",
    imageUrl: "/games/CrossyRoad/cover.jpg",
    gameUrl: "/games/CrossyRoad/index.html",
  },
  14: {
    id: 14,
    name: "Pirate.io",
    imageUrl: "/games/pirate.io/cover.jpg",
    gameUrl: "/games/pirate.io/index.html",
    embedUrl: "https://garrett2109.github.io/YoHoHo.ioserver-2/",
  },
  15: {
    id: 15,
    name: "Drift Boss",
    imageUrl: "/games/DriftBoss/cover.jpg",
    gameUrl: "/games/DriftBoss/index.html",
    embedUrl: "https://sciencemathedu.github.io/drift-boss/",
  },
  16: {
    id: 16,
    name: "Cut The Rope",
    imageUrl: "/games/CutTheRope/cover.jpg",
    gameUrl: "/games/CutTheRope/index.html",
    embedUrl: "https://sciencemathedu.github.io/cuttherope/",
  },
  17: {
    id: 17,
    name: "MotoX3M",
    imageUrl: "/games/MotoX3M/cover.jpg",
    gameUrl: "/games/MotoX3M/index.html",
    embedUrl: "https://sciencemathedu.github.io/motox3m/",
  },
  18: {
    id: 18,
    name: "MotoX3M 2",
    imageUrl: "/games/MotoX3M2/cover.jpg",
    gameUrl: "/games/MotoX3M2/index.html",
    embedUrl: "https://sciencemathedu.github.io/motox3m2/",
  },
  19: {
    id: 19,
    name: "MotoX3M 3",
    imageUrl: "/games/MotoX3M3/cover.jpg",
    gameUrl: "/games/MotoX3M3/index.html",
    embedUrl: "https://sciencemathedu.github.io/motox3m3/",
  },
  20: {
    id: 20,
    name: "MotoX3M PoolParty",
    imageUrl: "/games/MotoX3MPoolParty/cover.jpg",
    gameUrl: "/games/MotoX3MPoolParty/index.html",
    embedUrl:
      "https://sciencemathlearning.github.io/motox3mpool/3kh0-assets-main-motox3m-pool/motox3m-pool/",
  },
  21: {
    id: 21,
    name: "MotoX3M Spooky",
    imageUrl: "/games/MotoX3MSpooky/cover.jpg",
    gameUrl: "/games/MotoX3MSpooky/index.html",
    embedUrl:
      "https://sciencemathlearning.github.io/motox3mspooky/3kh0-assets-main-motox3m-spooky/motox3m-spooky",
  },
  22: {
    id: 22,
    name: "MotoX3M Winter",
    imageUrl: "/games/MotoX3MWinter/cover.jpg",
    gameUrl: "/games/MotoX3MWinter/index.html",
    embedUrl:
      "https://sciencemathlearning.github.io/motox3mwinter/3kh0-assets-main-motox3m-winter/motox3m-winter",
  },
  23: {
    id: 23,
    name: "Bloxors",
    imageUrl: "/games/Bloxors/cover.jpg",
    gameUrl: "/games/Bloxors/index.html",
    embedUrl: "https://sciencemathlearning.github.io/bloxors.html",
  },
  24: {
    id: 24,
    name: "Monkey Mart",
    imageUrl: "/games/MonkeyMart/cover.jpg",
    gameUrl: "/games/MonkeyMart/index.html",
    embedUrl: "https://sciencemathlearning.github.io/monkeymart/",
  },
  25: {
    id: 25,
    name: "Deal Or No Deal",
    imageUrl: "/games/DealOrNoDeal/cover.jpg",
    gameUrl: "/games/DealOrNoDeal/index.html",
    embedUrl: "https://sciencemathedu.github.io/deal/",
  },
  26: {
    id: 26,
    name: "PacMan",
    imageUrl: "/games/PacMan/cover.png",
    gameUrl: "/games/PacMan/index.html",
    embedUrl: "https://sciencemathedu.github.io/pacman/",
  },
  27: {
    id: 27,
    name: "PacMan",
    imageUrl: "/games/BasketBros/cover.jpg",
    gameUrl: "/games/BasketBros/index.html",
    embedUrl: "https://sciencemathlearning.github.io/basketbrosio/",
  },
  28: {
    id: 28,
    name: "Stack",
    imageUrl: "/games/Stack/cover.jpg",
    gameUrl: "/games/Stack/index.html",
    embedUrl: "https://sciencemathedu.github.io/stack/",
  },
  29: {
    id: 29,
    name: "Drift Hunters",
    imageUrl: "/games/DriftHunters/cover.jpg",
    gameUrl: "/games/DriftHunters/index.html",
    embedUrl: "https://sciencemathedu.github.io/DriftHunters/",
  },
  30: {
    id: 30,
    name: "FireBoy And WaterGirl 1",
    imageUrl: "/games/FireBoyAndWaterGirl1/cover.jpg",
    gameUrl: "/games/FireBoyAndWaterGirl1/index.html",
    embedUrl: "https://sciencemathedu.github.io/FireBoyAndWaterGirl1/",
  },
  31: {
    id: 31,
    name: "FireBoy And WaterGirl 2",
    imageUrl: "/games/FireBoyAndWaterGirl2/cover.jpg",
    gameUrl: "/games/FireBoyAndWaterGirl2/index.html",
    embedUrl: "https://sciencemathedu.github.io/FireBoyAndWaterGirl2/",
  },
  32: {
    id: 32,
    name: "",
    imageUrl: "/games//cover.jpg",
    gameUrl: "/games//index.html",
    embedUrl: "https://sciencemathedu.github.io//",
    },
    33: {
      id: 33,
      name: "FireBoy And WaterGirl 4",
      imageUrl: "/games/FireBoyAndWaterGirl4/cover.jpg",
      gameUrl: "/games/FireBoyAndWaterGirl4/index.html",
      embedUrl: "https://sciencemathedu.github.io/FireBoyAndWaterGirl4/",
  },
  34: {
      id: 34,
      name: "Flappy Bird",
      imageUrl: "/games/FlappyBird/cover.jpg",
      gameUrl: "/games/FlappyBird/index.html",
      embedUrl: "https://sciencemathedu.github.io/FlappyBird/",
  },
  35: {
      id: 35,
      name: "Cluster Rush",
      imageUrl: "/games/ClusterRush/cover.jpg",
      gameUrl: "/games/ClusterRush/index.html",
      embedUrl: "https://sciencemathedu.github.io/ClusterRush/",
  },
  36: {
      id: 36,
      name: "Google Snake",
      imageUrl: "/games/GoogleSnake/cover.jpg",
      gameUrl: "/games/GoogleSnake/index.html",
      embedUrl: "https://sciencemathedu.github.io/GoogleSnake/",
  },
  37: {
      id: 37,
      name: "Retro Bowl",
      imageUrl: "/games/RetroBowl/cover.png",
      gameUrl: "/games/RetroBowl/index.html",
      embedUrl: "https://sciencemathedu.github.io/RetroBowl/",
  },
};

export const gameSlots: GameSlot[] = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
  name: configuredGames[index + 1]?.name ?? "",
  imageUrl: configuredGames[index + 1]?.imageUrl ?? "",
  gameUrl: configuredGames[index + 1]?.gameUrl ?? "",
}));
