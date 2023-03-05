import { MenuType } from "../components/types/OrderType";

export const menu: MenuType[] = [
  { name: "ビール", image: "drinks/beer.png" },
  { name: "ビール:大", image: "drinks/beer_L.png" },
  { name: "ハイボール", image: "drinks/highball.png" },
  { name: "ハイボール:大", image: "drinks/highball_L.png" },
  { name: "焼酎", image: "drinks/shochu.png" },
  { name: "日本酒", image: "drinks/sake.png" },
  { name: "ワイン", image: "drinks/wine.png" },
  { name: "ホッピー", image: "drinks/hoppy.png" },
  { name: "ホッピー中", image: "drinks/hoppy_naka.png" },

  { name: "水", image: "highball.png" },
];

export const onlyWater: MenuType[] = [{ name: "水", image: "beer.png" }];
