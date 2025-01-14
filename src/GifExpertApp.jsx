import { useState } from "react";
// import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "Valorant"]);
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
