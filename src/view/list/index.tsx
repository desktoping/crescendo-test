import { useEffect, useState } from "react";
import { Recipe } from "../../types/recipe";
import Dish from "../item";
import Loader from "../loader";
import "./list.css";

const apiRoot = process.env.REACT_APP_API_ROOT;

const List = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const runAsync = async () => {
      setIsLoading(true);
      try {
        const data: Recipe[] = await fetch(`${apiRoot}/recipes`).then((res) =>
          res.json()
        );

        setRecipes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    runAsync();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="list-container">
      {recipes.map((s) => (
        <Dish key={s.uuid} data={s} />
      ))}
    </div>
  );
};

export default List;
