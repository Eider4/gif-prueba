import { useState, useEffect } from "react";
import { GetGit } from "../helpers/GetGift";
import { GiftItem } from "./GiftItem";
export const ShowCategoryApp = ({ category }) => {
  const [imagenes, setImagenes] = useState([]);
  const getImages = async () => {
    const newImages = await GetGit(category);
    setImagenes(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {imagenes.map((img) => (
          <GiftItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

