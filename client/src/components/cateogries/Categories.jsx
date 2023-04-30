import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../newsCard/newsCard";

const Categories = () => {
  const categoriesNews = useLoaderData();
  return (
    <div>
      {categoriesNews &&
        categoriesNews.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNewsData={singleNews} />
        ))}
    </div>
  );
};

export default Categories;
