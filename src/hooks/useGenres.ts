import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const { data: genres, isLoading, error } = useData<Genre>("/genres");
  return { genres, error, isLoading };
};

export default useGenres;
