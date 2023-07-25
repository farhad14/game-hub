import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre(genre: Genre): void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;
  ``;

  return (
    <List>
      {isLoading
        ? skeletons.map((key) => <GenreSkeleton key={key} />)
        : genres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                />
                <Button
                  fontSize="lg"
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};
export default GenreList;
