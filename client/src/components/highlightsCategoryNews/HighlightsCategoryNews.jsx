import React, { useEffect, useState } from "react";

import HighLightNewsCard from "../highLightNewsCard/HighLightNewsCard";
const HighlightCategoryNews = () => {
  const [highlightsCategoryNews, setHighlightsCategoryNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/highlightCategoryNews")
      .then((res) => res.json())
      .then((data) => setHighlightsCategoryNews(data));
  }, []);

  return (
    <div className="mt-6">
      {highlightsCategoryNews &&
        highlightsCategoryNews.map((singleCategoryNewsData) => (
          <HighLightNewsCard
            key={singleCategoryNewsData._id}
            singleCategoryNewsData={singleCategoryNewsData}
          />
        ))}
    </div>
  );
};

export default HighlightCategoryNews;
