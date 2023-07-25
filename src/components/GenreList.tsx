import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreSkeleton from "./GenreSkeleton";

const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

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
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
    </List>
  );
};
export default GenreList;
