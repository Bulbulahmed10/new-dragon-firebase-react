import React from "react";
import { useLoaderData } from "react-router-dom";
// import { BsBookmark, BsShare } from "react-icons/bs";
// import { AiFillStar, AiFillEye } from "react-icons/ai";
// import Ratings from "react-rating";
// import moment from "moment";
import NewsCard from "../newsCard/newsCard";

// const NewsCard = ({ singleNewsData }) => {
//   const { _id, author, title, image_url, details, rating, total_view } =
//     singleNewsData;
//   return (
//     <div className="border mb-5 rounded-sm">
//       <div className="flex items-center justify-between bg-[#F3F3F3] px-5 py-2">
//         <div className="flex items-center gap-3 ">
//           <img
//             className="w-10 h-10 rounded-full object-cover"
//             src={author?.img}
//             alt=""
//           />
//           <div>
//             <h3 className="font-medium text-[#403F3F]">{author.name}</h3>
//             <p className="text-[#706f6f] text-sm">
//               {moment(author?.published_date).format("yyyy-MM-D")}
//             </p>
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <BsBookmark className="cursor-pointer" />
//           <BsShare className="cursor-pointer" />
//         </div>
//       </div>
//       <div className="px-5 mt-3 py-2">
//         <h2 className="text-xl font-bold"> {title} </h2>
//         <img
//           className="w-full h-[400x] object-cover py-2"
//           src={image_url}
//           alt=""
//         />
//         <p className="text-[#706F6F]"> {details.slice(0, 275)}... </p>
//         {details.length > 275 && (
//           <button className="text-[#FF8A48] font-bold underline">
//             Read more
//           </button>
//         )}
//       </div>
//       <div className="px-5 py-2 flex items-center justify-between border-t">
//         <div className="flex items-center gap-2">
//           <Ratings
//             className="text-lg"
//             placeholderRating={rating?.number}
//             placeholderSymbol={<AiFillStar className="text-[#FF8A48]" />}
//             emptySymbol={<AiFillStar />}
//             readonly
//           />
//           <span className="text-lg font-bold text-[#706f6f] -mt-1">
//             {rating?.number}
//           </span>
//         </div>
//         <div className="flex items-center gap-2">
//           <AiFillEye className="text-xl text-[#706F6F]" />
//           <span className="text-[#706F6F] font-bold text-base">
//             {total_view}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

const News = () => {
  const allNewsData = useLoaderData();
  return (
    <div>
      {allNewsData.map((singleNewsData) => (
        <NewsCard key={singleNewsData._id} singleNewsData={singleNewsData} />
      ))}
      <h1>kdk</h1>
    </div>
  );
};

export default News;
