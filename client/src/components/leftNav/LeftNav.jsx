import React, { useEffect, useState } from "react";
import CategoryActiveLink from "../categoryActiveLink/CategoryActiveLink";
import HighlightCategoryNews from "../highlightsCategoryNews/HighlightsCategoryNews";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="basis-1/5">
      <h2 className="text-xl font-bold tracking-wider">All Category</h2>
      <div className="flex flex-col gap-2 mt-3">
        <CategoryActiveLink to="/">All News</CategoryActiveLink>
        {categories &&
          categories.map((category) => (
            <CategoryActiveLink
              to={`/categories/${category.id}`}
              key={category.id}>
              {category.name}
            </CategoryActiveLink>
          ))}
      </div>
      <div>
        <HighlightCategoryNews />
      </div>
    </div>
  );
};

export default LeftNav;
