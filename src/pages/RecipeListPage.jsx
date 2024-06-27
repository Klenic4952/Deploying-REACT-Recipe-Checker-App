import { Container, SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ clickFn, recipes }) => {
  return (
    <Container maxW={{ base: "100%", lg: "85%" }}>
      <SimpleGrid spacing="10" minChildWidth="300px">
        {recipes.map((recipe) => (
          <RecipeCard
            clickFn={clickFn}
            recipe={recipe}
            key={recipe.recipe.url}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
