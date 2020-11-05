import { ingredientsNames } from "../constants";

export const getIngredientName = (ingredient: keyof typeof ingredientsNames) => {
  return ingredientsNames[ingredient];
};
