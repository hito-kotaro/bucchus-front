import React, { useEffect, useState } from "react";
import localStorageKeys from "../../data/localStorageKeys";
import Header from "../Header";
import useHistory from "../hooks/useHistory";
import HistoryPage from "./HistoryPage";
import RegisterPage from "./RegisterPage";

const mainPage = () => {
  const [isMain, setIsMain] = useState(true);
  const {
    initLocalStorage,
    updateHistory,
    checkDrankWater,
    resetHistory,
    history,
    latest,
    tooManyDrink,
  } = useHistory();

  useEffect(() => {
    initLocalStorage(localStorageKeys.HISTORY);
    checkDrankWater();
  });

  useEffect(() => {
    checkDrankWater();
  }, [history]);

  return (
    <>
      <Header
        isMain={isMain}
        toggleMain={() => setIsMain(!isMain)}
        reset={resetHistory}
      />
      {isMain ? (
        <RegisterPage
          history={history}
          latest={latest}
          tooManyDrink={tooManyDrink}
          updateHistory={updateHistory}
        />
      ) : (
        <HistoryPage history={history} />
      )}
    </>
  );
};

export default mainPage;
