# Add your games here

Each game gets its own folder inside `public/games`:

```text
public/
└── games/
    └── my-first-game/
        ├── index.html
        ├── cover.png
        └── ...your game files
```

Then open `src/game-manifest.ts` and connect the folder to a slot:

```ts
1: {
  id: 1,
  name: 'My First Game',
  imageUrl: '/games/my-first-game/cover.png',
  gameUrl: '/games/my-first-game/index.html',
},
```

Use a different number from 1 to 60 for each game. Leave unused slots out of
`configuredGames`; they will stay blank. The game cover opens the linked game
in a new tab.