import messages from "../../data/messages";

export type OrderType = {
  name: string;
  image: string;
  timestamp: string;
};

export const defaultOrder: OrderType = {
  name: "bucchus",
  image: "bucchus.png",
  timestamp: messages.start,
};

export type MenuType = {
  name: string;
  image: string;
};
