import { ingredientsNames } from "../constants";

export type IngridientName = keyof typeof ingredientsNames;

export const getIngredientName = (ingredient: IngridientName) => {
  return ingredientsNames[ingredient];
};

export const getPizzaPrice = (
  fillingsCount: number,
  isBigPizza: boolean,
  fillingPrice: number,
  defaultPrices: { small: number, big: number },
): number => {
  const fillingsTotalPrice = fillingsCount * fillingPrice;

  if (isBigPizza) {
    return defaultPrices.big + fillingsTotalPrice;
  }

  return defaultPrices.small + fillingsTotalPrice;
};
