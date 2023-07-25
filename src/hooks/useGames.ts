import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const params = {
    genre: gameQuery.genre,
    platform: gameQuery.platform,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  };
  return useData<Game>("/games", { params }, [gameQuery]);
};

export default useGames;
