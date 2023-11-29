import { useState } from "react";
import "./App.css";
import { RecipeDetailContextProvider } from "./context";
import Footer from "./view/footer";
import Header from "./view/header";
import List from "./view/list";
import Modal from "./view/modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRecipeId, setModalRecipeId] = useState("");

  return (
    <div className="App">
      <RecipeDetailContextProvider
        value={{
          open: modalOpen,
          handleToogle: (v) => setModalOpen(v),
          recipeId: modalRecipeId,
          setRecipeId: (v) => setModalRecipeId(v),
        }}
      >
        <Header />
        <List />
        <Footer />
        {modalOpen && <Modal />}
      </RecipeDetailContextProvider>
    </div>
  );
};

export default App;
