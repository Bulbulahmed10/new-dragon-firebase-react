import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { Link } from "react-router-dom";
import moment from "moment";
const HighLightNewsCard = ({ singleCategoryNewsData }) => {
  const { _id, image_url, title, category_name, published_date } =
    singleCategoryNewsData;
  return (
    <div className="border p-2 mb-4 rounded-sm">
      <img className="mb-2" src={image_url} alt="" />
      <Link
        to={`/news/${_id}`}
        className="font-bold text-[#403F3F] hover:text-blue-500">
        {title.slice(0, 80)}...
      </Link>
      <div className="flex items-center justify-between gap-4 mt-4 border-t py-1">
        <span className="capitalize font-semibold text-sm text-blue-400">
          {category_name}
        </span>
        <div className="flex items-center gap-2">
          <BsCalendar4Week className="text-sm" />
          <span className="font-medium text-sm tracking-wide">
            {moment(published_date).format("MMM Do, YY")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HighLightNewsCard;
