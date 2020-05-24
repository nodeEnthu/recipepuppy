export const resolveTitle = (recipe, withIngredients, withoutIngredients) => {
  const q = recipe.join(",");
  const plusIngredients = Array.isArray(withIngredients)? withIngredients.join(","): "";
  const negativeIngredients = Array.isArray(withoutIngredients)? `,-${withoutIngredients.join(",-")}`: "";

  return `Search results for ${q} ${plusIngredients ? `with ${withIngredients.join(" , ")}` : ""} ${negativeIngredients ? ` without ${withoutIngredients.join(" , ")}` : ""}`
}

export const constructQueryParams = (recipe, withIngredients, withoutIngredients) => {
  const q = recipe.join(",");
  const plusIngredients = Array.isArray(withIngredients)? withIngredients.join(","): "";
  const negativeIngredients = Array.isArray(withoutIngredients)? `,-${withoutIngredients.join(",-")}`: "";

  return`?q=${q}&i=${plusIngredients}${negativeIngredients}`;
}