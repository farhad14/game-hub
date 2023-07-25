import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card height="100%">
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>
      <HStack justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;
