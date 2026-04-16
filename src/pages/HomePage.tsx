import { useEffect, useState } from "react";
import { getRecipes } from "../api/recipesApi";
import type { Recipe } from "../types/Recipe";
import { RecipeCard } from "../components/RecipeCard";

export const HomePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes().then(setRecipes);
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Cordon Bleu</h1>
      <input
        type="text"
        placeholder="Rechercher une recette..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};