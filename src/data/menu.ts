import { MenuType } from "../components/types/OrderType";

export const menu: MenuType[] = [
  { id: 1, name: "ビール", image: "drinks/beer.png" },
  { id: 2, name: "ビール:大", image: "drinks/beer_L.png" },
  { id: 3, name: "ハイボール", image: "drinks/highball.png" },
  { id: 4, name: "ハイボール:大", image: "drinks/highball_L.png" },
  { id: 5, name: "焼酎", image: "drinks/shochu.png" },
  { id: 6, name: "日本酒", image: "drinks/sake.png" },
  { id: 7, name: "ワイン", image: "drinks/wine.png" },
  { id: 8, name: "ホッピー", image: "drinks/hoppy.png" },
  { id: 9, name: "ホッピー中", image: "drinks/hoppy_naka.png" },

  { id: 1, name: "水", image: "highball.png" },
];

export const onlyWater: MenuType[] = [{ id: 1, name: "水", image: "beer.png" }];
