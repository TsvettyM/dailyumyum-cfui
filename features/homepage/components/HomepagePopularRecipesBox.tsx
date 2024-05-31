import IconLiked from "@/features/icons/components/IconLiked";
import IconLine from "@/features/icons/components/IconLine";
import IconMeals from "@/features/icons/components/IconMeals";
import IconRating from "@/features/icons/components/IconRating";
import IconShare from "@/features/icons/components/IconShare";
import IconTime from "@/features/icons/components/IconTime";
import IconYums from "@/features/icons/components/IconYums";
import Image from "next/image";

interface IProps {
  title: string;
  description: string;
  time: number;
  rating: number;
  meals: number;
  yums: number;
  isLiked?: boolean;
  image: string;
  share: string;
}

const HomepagePopularRecipesBox = ({
  title,
  description,
  time,
  rating,
  meals,
  yums,
  isLiked,
  image,
  share,
}: IProps) => {
  return (
    <div className="recipes__box relative flex flex-col items-center justify-center rounded-10 px-6 text-center shadow-bottom">
      <IconLine className="absolute -left-0.5 -top-0.5" />
      <IconLine className="absolute -bottom-0.5 -right-0.5 rotate-180" />
      <div className="relative -top-7 -mb-5 h-[167px] w-[207px]">
        <Image src={image} alt="" fill />
      </div>
      <div className="relative bottom-32 flex gap-64">
        <button type="button">
          <IconLiked />
        </button>
        <button type="button">
          <IconShare />
        </button>
      </div>
      <h4 className="flex text-32 font-bold text-black">{title}</h4>
      <p className="mt-5 flex max-w-[290px] font-medium text-black">
        {description}
      </p>
      <hr className="mt-10 w-full rounded-10 text-[#AFACAC]" />
      <div className="my-5 flex items-center justify-center gap-9">
        <p className="flex flex-col items-center justify-center">
          <IconTime />
          {time} min
        </p>
        <p className="flex flex-col items-center justify-center">
          <IconRating />
          {rating}
        </p>
        <p className="flex flex-col items-center justify-center">
          <IconMeals />
          {meals} meals
        </p>
        <p className="flex flex-col items-center justify-center">
          <IconYums />
          {yums}
        </p>
      </div>
    </div>
  );
};

export default HomepagePopularRecipesBox;