import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/imageUrl";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card height="100%">
    <Image src={getCroppedImageUrl(game.background_image)} />
    <CardBody>
      <HStack justifyContent="space-between" marginBottom={3}>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="2xl">
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
