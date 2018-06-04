const law = {
    legalAge: 18,
    legalDrinkingAge: 21
}
export const isAdult = (age) => law.legalAge <= age;
export const canDrink = (age) => law.legalDrinkingAge <= age;