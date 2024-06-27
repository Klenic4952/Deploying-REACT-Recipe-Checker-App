import { useState } from "react";
import { TextInput } from "./ui/Textinput";
import { data } from "../utils/data";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const recipes = data.hits;

  const matchedLabels = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

    const handleChange = (event) => setSearchField(event.target.value);

  return (
    <>
      <TextInput
        changeFn={handleChange}
        w= {{ base:"250px", lg: "450px"}}
        mb={8}
        placeholder="Search recipes"
        bgColor="white"
        focusBorderColor="blue.300"
      />
      <RecipeListPage clickFn={clickFn} recipes={matchedLabels} />
    </>
  );
};
