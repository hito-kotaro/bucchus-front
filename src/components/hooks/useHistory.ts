/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from "react";
import { defaultOrder, MenuType, OrderType } from "../types/OrderType";
import useTimestamp from "./useTimestamp";

const useHistory = () => {
  const defaultOrderJson = JSON.stringify(defaultOrder, undefined, 1);
  const defaultHistoryJson = JSON.stringify([], undefined, 1);
  const { genTimestamp } = useTimestamp();
  const [tooManyDrink, setTooManyDrink] = useState(false);
  const [latest, setLatest] = useState<OrderType>(
    JSON.parse(localStorage.getItem("latest") ?? defaultOrderJson)
  );
  const [history, setHistory] = useState<OrderType[]>(
    JSON.parse(localStorage.getItem("history") ?? defaultHistoryJson)
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

  // localStorageのStringを配列にして返す
  const getHistory = () => {
    const array: OrderType[] = JSON.parse(
      localStorage.getItem("history") ?? ""
    );
    return array;
  };

  // MenuTypeのデータをもとにOrderTypeを作成して返す
  const createData = (order: MenuType) => {
    const data: OrderType = {
      name: order.name,
      image: order.image,
      timestamp: genTimestamp(),
    };
    return data;
  };

  // 既存のHistory配列に新しいOrderを追加してLocalStorageを更新
  const updateHistory = (order: MenuType) => {
    const array: OrderType[] = getHistory();

    const data = createData(order);

    array.push(data);
    setHistory(array);
    setLatest(data);

    localStorage.setItem("latest", JSON.stringify(array, undefined, 1));
    localStorage.setItem("history", JSON.stringify(data, undefined, 1));
  };

  // 水のんだかチェック
  const checkDrankWater = () => {
    const pick = history.slice(-3);
    const hasWater = pick.some((item) => item.name === "水");
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
