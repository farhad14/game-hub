import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre(genre: Genre): void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
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
                    objectFit="cover"
                  />
                  <Button
                    fontSize="lg"
                    variant="link"
                    onClick={() => onSelectGenre(genre)}
                    fontWeight={
                      selectedGenre?.id === genre.id ? "bold" : "normal"
                    }
                    whiteSpace="normal"
                    textAlign="left"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
};
export default GenreList;
