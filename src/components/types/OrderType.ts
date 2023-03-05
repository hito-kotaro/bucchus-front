import messages from "../../data/messages";

export type OrderType = {
  id: number;
  name: string;
  image: string;
  timestamp: string;
};

export const defaultOrder: OrderType = {
  id: 0,
  name: "bucchus",
  image: "bucchus.png",
  timestamp: messages.start,
};

export type MenuType = {
  id: number;
  name: string;
  image: string;
};

export const blankMenu: MenuType = {
  id: 0,
  name: "None",
  image: "",
};
