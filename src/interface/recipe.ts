export interface Step {
  stepDesc: string;
  imgSrc: string;
}

export interface Ingredient {
  ingredient: string;
  quantity: string;
}

export interface User {
  profileImg: string;
  name: string;
  password: string;
  email: string;
}

export interface RecipeData {
  title: string;
  description: string;
  category: string[];
  cookingInfo: string[];
  cookingTip: string;
  mainImg: {
    file: File;
    preview: string;
  } | null;
  completedImgs: Array<{
    file: File;
    preview: string;
  } | null>;
  ingredientList: Ingredient[];
  stepList: Step[];
  creator: User;
}

export interface CardData {
  img: string;
  title: string;
  id: string;
  viewCount: number;
  date: string;
}
