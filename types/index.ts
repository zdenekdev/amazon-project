export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CheckoutProducts = {
  id: number;
  title: string;
  price: number;
  ratingValue: number;
  description: string;
  category: string;
  image: string;
  hasPrime: boolean;
};
