import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
   <div className="flex flex-row mt-3 ">
   
   {[...Array(5)].map((_,i) => (
    <span  key={i} onClick={() => onClick(i)} style = { style }>
      
      
      {rating > i ? (
        <AiFillStar fontSize="24px" />
      ) : (
        <AiOutlineStar fontSize="24px" />
      )}
    </span>
  ))}
   
   </div>
  );
};

export default Rating;
