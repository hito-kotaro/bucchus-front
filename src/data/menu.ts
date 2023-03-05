import { MenuType } from "../components/types/OrderType";

export const menu: MenuType[] = [
  { id: 2, name: "ビール", image: "drinks/beer.png" },
  { id: 3, name: "ビール:大", image: "drinks/beer_L.png" },
  { id: 4, name: "ハイボール", image: "drinks/highball.png" },
  { id: 5, name: "ハイボール:大", image: "drinks/highball_L.png" },
  { id: 6, name: "焼酎", image: "drinks/shochu.png" },
  { id: 7, name: "日本酒", image: "drinks/sake.png" },
  { id: 8, name: "ワイン", image: "drinks/wine.png" },
  { id: 9, name: "ホッピー", image: "drinks/hoppy.png" },
  { id: 10, name: "ホッピー中", image: "drinks/hoppy_naka.png" },
  { id: 1, name: "水", image: "highball.png" },
  { id: 0, name: "None", image: "" },
];

export const onlyWater: MenuType[] = [
  { id: 0, name: "None", image: "" },
  { id: 1, name: "水", image: "beer.png" },
];
