type NavigationParams = {
  MainScreen: undefined;
  GameScreen: { id: string; title: string };
};

type Filters = {
  platform: string;
  sort: string;
  category: string;
};

type Item = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  platform: string;
  genre: string;
};
