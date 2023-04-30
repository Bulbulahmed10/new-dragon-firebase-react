import React, { useEffect, useState } from "react";
import RightNav from "../../shared/rightNav/RightNav";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const NewsDetails = () => {
  const [newsData, setNewsData] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  const findData =
    newsData && newsData.find((singleNews) => singleNews._id === params.id);

  return (
    <div className="flex gap-6 mt-8">
      <div className="basis-4/5 p-4 border rounded-sm h-fit">
        <img
          className="rounded-md w-full h-[500px] object-full"
          src={findData && findData?.image_url}
          alt=""
        />
        <h2 className="my-4 text-2xl font-bold text-[#403F3F]">
          {findData && findData?.title}
        </h2>
        <p className="text-lg text-[#706F6F]">{findData && findData.details}</p>
        <Link
          to={`/categories/${parseInt(findData && findData?.category_id)}`}
          className="flex items-center gap-2 bg-[#D72050] w-fit text-white px-4 py-2 font-semibold text-lg mt-4 rounded-md">
          <BsArrowLeft className="text-xl" />{" "}
          <span>All news in this category</span>
        </Link>
      </div>
      <RightNav />
    </div>
  );
};

export default NewsDetails;
