import { MenuType } from "../components/types/OrderType";

export const menu: MenuType[] = [
  { name: "ビール", image: "beer.png" },
  { name: "ビール:大", image: "beer.png" },
  { name: "ハイボール", image: "highball.png" },
  { name: "ハイボール:大", image: "highball.png" },
  { name: "焼酎水割り", image: "highball.png" },
  { name: "焼酎ロック", image: "highball.png" },
  { name: "日本酒", image: "highball.png" },
  { name: "赤ワイン", image: "highball.png" },
  { name: "白ワイン", image: "highball.png" },
  { name: "水", image: "highball.png" },
];

export const onlyWater: MenuType[] = [{ name: "水", image: "beer.png" }];
