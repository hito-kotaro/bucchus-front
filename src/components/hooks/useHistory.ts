/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from "react";
import { MenuType, OrderType } from "../types/OrderType";
import useTimestamp from "./useTimestamp";

const useHistory = () => {
  const { genTimestamp } = useTimestamp();
  const [tooManyDrink, setTooManyDrink] = useState(false);
  const [latest, setLatest] = useState<OrderType>(
    JSON.parse(
      localStorage.getItem("latest") ??
        JSON.stringify(
          {
            name: "bucchus",
            image: "bucchus.png",
            timestamp: "さあ飲もう",
          },
          undefined,
          1
        )
    )
  );
  const [history, setHistory] = useState<OrderType[]>(
    JSON.parse(
      localStorage.getItem("history") ?? JSON.stringify([], undefined, 1)
    )
  );

  // 初期化
  const initLocalStorage = () => {
    const array = localStorage.getItem("history");
    if (!array) {
      const json = JSON.stringify([], undefined, 1);
      localStorage.setItem("history", json);
      setHistory([]);
    }
  };

  // 配列に変換して返す
  const getHistory = () => {
    const array: OrderType[] = JSON.parse(
      localStorage.getItem("history") ?? ""
    );
    return array;
  };

  const updateHistory = (order: MenuType) => {
    const array: OrderType[] = getHistory();

    const data: OrderType = {
      name: order.name,
      alcohol: 0,
      timestamp: genTimestamp(),
      image: order.image,
    };

    array.push(data);
    setHistory(array);
    setLatest(data);
    const json = JSON.stringify(array, undefined, 1);

    // latestも突っ込む
    localStorage.setItem("latest", JSON.stringify(data, undefined, 1));
    localStorage.setItem("history", json);
  };

  const checkDrankWater = () => {
    // 3回以内に水を注文しているかを確認する
    const pick = history.slice(-3);
    // 最後の3回に水が含まれていたらtrue
    const hasWater = pick.some((item) => item.name === "水");
    // 3杯以上飲んでいてかつ水は飲んでいない場合true
    setTooManyDrink(history.length >= 3 && !hasWater);
  };

  return {
    initLocalStorage,
    updateHistory,
    checkDrankWater,
    history,
    latest,
    tooManyDrink,
  };
};

export default useHistory;
