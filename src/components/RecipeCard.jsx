import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Tag } from "./ui/Tag";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Card
      maxW="sm"
      borderRadius="xl"
      cursor="pointer"
      bgColor="white"
      onClick={() => clickFn(recipe)}
    >
      <CardBody padding="0" align="center">
        <Image
          h="200px"
          w="full"
          objectFit="cover"
          borderTopRadius="xl"
          src={recipe.recipe.image}
        />
        <Stack m="3" spacing="2">
          <Box>
            <Text
              fontSize="14px"
              color="grey"
              fontWeight="medium"
              textTransform="uppercase"
            >
              {recipe.recipe.mealType}
            </Text>
            <Heading size="md" m="1" fontWeight="medium">
              {recipe.recipe.label}
            </Heading>
          </Box>
          <VStack spacing="1.0">
            <Box>
              {recipe.recipe.healthLabels
                .filter((label) => label === "Vegetarian" || label === "Vegan")
                .map((label) => (
                  <Tag key={label} bgColor="purple.100">
                    {label}
                  </Tag>
                ))}
            </Box>
            <Box>
              {recipe.recipe.dietLabels.map((label) => {
                return (
                  <Tag key={label} bgColor="green.100">
                    {label}
                  </Tag>
                );
              })}
            </Box>
            <Flex flexDir="row" gap="1.5">
              <Box>Dish:</Box>
              <Box>
                {recipe.recipe.dishType.map((label) => {
                  return (
                    <Text
                      key={label}
                      fontWeight="semibold"
                      textTransform="capitalize"
                    >
                      {label}
                    </Text>
                  );
                })}
              </Box>
            </Flex>
            <Box>
              <Text>Cautions:</Text>
              {recipe.recipe.cautions.map((label) => {
                return (
                  <Tag key={label} bgColor="#FCC3B2">
                    {label}
                  </Tag>
                );
              })}
            </Box>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
