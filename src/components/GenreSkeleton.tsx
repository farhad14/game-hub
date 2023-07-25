import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => (
  <ListItem paddingY="5px">
    <HStack>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText width="100%" />
    </HStack>
  </ListItem>
);

export default GenreSkeleton;
