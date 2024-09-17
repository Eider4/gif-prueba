import { useState } from "react";
import { ShowCategoryApp } from "./components/ShowCategoryApp";
import { AddCategoryApp } from "./components/AddCategoryApp";

export const GitExpertApp = () => {
  const [category, setCategory] = useState(["Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    if (category.includes(newCategory)) return;
    setCategory([newCategory, ...category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategoryApp onCategory={(e) => onAddCategory(e)} />
      {category.map((category) => (
        <ShowCategoryApp key={category} category={category} />
      ))}
    </>
  );
};
