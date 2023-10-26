import Image from "next/image";
import RatingAssembler from "../../helpers/RatingAssebler/RatingAssembler";
import ReviewCardProps from "../../types/ReviewCardProps";

let ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  nickname,
  content,
  imageUrl,
}) => {
  return (
    <div className="lg:w-1/3 md:w-full max-h-54 border border-secondary-600 text-text p-5 rounded-lg space-y-5">
      <div className="flex justify-between items-center">
        <div>{RatingAssembler({ amount: rating })}</div>

        <div className="flex justify-between items-center gap-2 ">
          <Image
            width={32}
            height={32}
            className="w-[32px] h-[32px] rounded-full bg-center bg-contain"
            src={imageUrl}
            alt="Review profile picture"
          />
          <div>
            <div className="text-lg">{name}</div>
            <div className="text-accent text-sm">@{nickname}</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-accent">{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;