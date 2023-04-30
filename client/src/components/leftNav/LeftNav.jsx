import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        {categories &&
          categories.map((category) => (
            <Link to={`/category/${category.id}`}
              className=" py-2 text-lg font-semibold  text-[#9F9F9F] hover:bg-[#E7E7E7] px-4 rounded-md hover:text-[#403F3F] tracking-wide"
              key={category.id}>
              {category.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default LeftNav;
