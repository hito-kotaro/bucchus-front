/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState } from "react";
import localStorageKeys from "../../data/localStorageKeys";
import { defaultOrder, MenuType, OrderType } from "../types/OrderType";
import useTimestamp from "./useTimestamp";

const useHistory = () => {
  const defaultOrderJson = JSON.stringify(defaultOrder, undefined, 1);
  const defaultHistoryJson = JSON.stringify([], undefined, 1);
  const { genTimestamp } = useTimestamp();
  const [tooManyDrink, setTooManyDrink] = useState(false);
  const [latest, setLatest] = useState<OrderType>(
    JSON.parse(
      localStorage.getItem(localStorageKeys.LATEST) ?? defaultOrderJson
    )
  );
  const [history, setHistory] = useState<OrderType[]>(
    JSON.parse(
      localStorage.getItem(localStorageKeys.HISTORY) ?? defaultHistoryJson
    )
  );

  // 初期化
  const initLocalStorage = (key: string) => {
    const array = localStorage.getItem(key);
    if (!array) {
      const json = JSON.stringify([], undefined, 1);
      localStorage.setItem(key, json);
      setHistory([]);
    }
  };

  // localStorageのStringを配列にして返す
  const getHistory = () => {
    const array: OrderType[] = JSON.parse(
      localStorage.getItem(localStorageKeys.HISTORY) ?? ""
    );
    return array;
  };

  // MenuTypeのデータをもとにOrderTypeを作成して返す
  const createData = (order: MenuType) => {
    const data: OrderType = {
      id: order.id,
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

    localStorage.setItem(
      localStorageKeys.HISTORY,
      JSON.stringify(array, undefined, 1)
    );
    localStorage.setItem(
      localStorageKeys.LATEST,
      JSON.stringify(data, undefined, 1)
    );
  };

  // 水のんだかチェック
  const checkDrankWater = () => {
    const pick = history.slice(-3);
    const hasWater = pick.some((item) => item.name === "水");
    setTooManyDrink(history.length >= 3 && !hasWater);
  };

  const resetHistory = () => {
    localStorage.removeItem(localStorageKeys.HISTORY);
    localStorage.removeItem(localStorageKeys.LATEST);
    initLocalStorage(localStorageKeys.HISTORY);
    const array: OrderType[] = getHistory();
    setHistory(array);
    setLatest(defaultOrder);
  };

  return {
    initLocalStorage,
    updateHistory,
    checkDrankWater,
    resetHistory,
    history,
    latest,
    tooManyDrink,
  };
};

export default useHistory;
