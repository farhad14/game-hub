import useGenres from "../hooks/useGenres";

interface Props {}

const GenreList = ({}: Props) => {
  const { genres } = useGenres();

  return (
    <div>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default GenreList;
