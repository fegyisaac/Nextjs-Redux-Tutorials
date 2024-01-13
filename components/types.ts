import { StaticImageData } from "next/image";

export type initialStateProps = {
  amount: number;
  catalogueCart: {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;

  }[];
  catalogueCartItem: {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
    cartQuantity?: number | undefined;
  }[];
  total: number;
};

export type idProps = {
  id: number;
  cartQuantity: number;
  image: StaticImageData;
  name: string;
  price: number;
};
