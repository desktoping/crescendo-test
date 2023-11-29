import { createContext } from "react";

type RecipeDetailContextType = {
    open: boolean;
    handleToogle: (v: boolean) => void
    recipeId: string
    setRecipeId: (v: string) => void
}

const RecipeDetailContext = createContext<RecipeDetailContextType>({ open: false, handleToogle: () => null, recipeId: '', setRecipeId: () => null })
const RecipeDetailContextProvider = RecipeDetailContext.Provider

export { RecipeDetailContextProvider, RecipeDetailContext }