import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const params = { genres: selectedGenre?.id, platforms: selectedPlatform?.id };
  const deps = [selectedGenre, selectedPlatform];
  return useData<Game>("/games", { params }, deps);
};

export default useGames;
