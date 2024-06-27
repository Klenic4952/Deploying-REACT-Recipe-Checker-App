import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/RecipeSearch";
import { Center, Container, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  const title = "Recipe Checker";

  return (
    <Container
      backgroundColor="blue.100"
      maxWidth="100vw"
      minHeight="100vh"
      textAlign="center"
    >
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <Center
          pt="40px"
          pb="80px"
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Heading mb="25px">{title}</Heading>
          <RecipeSearch clickFn={setSelectedRecipe} />
        </Center>
      )}
    </Container>
  );
};
