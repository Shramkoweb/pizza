import { ingredientsNames } from "../constants";

export const getIngredientName = (ingredient: keyof typeof ingredientsNames) => {
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
