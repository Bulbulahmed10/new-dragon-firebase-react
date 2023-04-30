import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../newsCard/newsCard";

const News = () => {
  const allNewsData = useLoaderData();
  return (
    <div>
      {allNewsData.map((singleNewsData) => (
        <NewsCard key={singleNewsData._id} singleNewsData={singleNewsData} />
      ))}
    </div>
  );
};

export default News;
