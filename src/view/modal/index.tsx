import { useContext, useEffect, useState } from "react";
import { RecipeDetailContext } from "../../context";
import { Recipe } from "../../types/recipe";
import Loader from "../loader";
import "./modal.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Special } from "../../types/special";
import SpecialInfo from "./special";

const apiRoot = process.env.REACT_APP_API_ROOT;

const Modal = () => {
  const { recipeId, handleToogle } = useContext(RecipeDetailContext);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [specials, setSpecials] = useState<Special[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 999px)");

  useEffect(() => {
    const runAsync = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(`${apiRoot}/recipes/${recipeId}`).then((res) =>
          res.json()
        );
        setRecipe(data);

        const spe = await fetch(`${apiRoot}/specials`).then((res) =>
          res.json()
        );
        setSpecials(spe);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (recipeId) {
      runAsync();
    }
  }, [recipeId]);

  // Modal support only for desktop
  if (isMobile) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="details-modal">
        {isLoading && <Loader />}
        {!isLoading && recipe && (
          <>
            <div
              className="details-modal-close"
              onClick={() => handleToogle(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="details-modal-content">
              <div className="top-content">
                <div>
                  <img src={recipe.images.small} alt={recipe.description} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h2 style={{ margin: 0 }}>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                  </div>
                  <div style={{ display: "flex", gap: "3em" }}>
                    <span>
                      <b>Cooking time:</b> {recipe.cookTime}
                    </span>
                    <span>
                      <b>Prep time:</b> {recipe.prepTime}
                    </span>
                    <span>
                      <b>Servings:</b> {recipe.servings}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <div>
                  <h3>Ingredients</h3>
                  <ul>
                    {recipe.ingredients.map((ing) => (
                      <li key={ing.uuid}>
                        {ing.name}
                        <SpecialInfo id={ing.uuid} specials={specials} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Directions</h3>
                  <ul>
                    {recipe.directions.map((dir) => (
                      <li>{dir.instructions}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="footer-content">
                <span>
                  <b>
                    <em>Post date:</em>
                  </b>{" "}
                  {recipe.postDate}
                </span>
                <span>
                  <b>
                    <em>Edit date:</em>
                  </b>{" "}
                  {recipe.editDate}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
