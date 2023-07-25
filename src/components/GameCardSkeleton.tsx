import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

interface Props {}

const GameCardSkeleton = ({}: Props) => (
  <Card>
    <Skeleton height="200px" />
    <CardBody>
      <SkeletonText />
    </CardBody>
  </Card>
);

export default GameCardSkeleton;
