import { useContext } from "react";
import { RecipeDetailContext } from "../../context";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Recipe } from "../../types/recipe";
import "./dish.css";

interface DishProps {
  readonly data: Recipe;
}

const Dish = ({ data }: DishProps) => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");
  const { handleToogle, open, setRecipeId } = useContext(RecipeDetailContext);

  return (
    <div className="dish-container">
      <div>
        <img
          src={isDesktop ? data.images.small : data.images.medium}
          alt={data.description}
        />
      </div>
      <div className="dish-info">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <button
          className="btn-view-recipe"
          disabled={open}
          onClick={() => {
            handleToogle(true);
            setRecipeId(data.uuid);
          }}
        >
          View recipe
        </button>
      </div>
    </div>
  );
};

export default Dish;
