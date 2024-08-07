interface IRecipe {
  id: string;
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

export default IRecipe;
