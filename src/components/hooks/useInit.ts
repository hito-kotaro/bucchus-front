const useInit = () => {
  const initLocalStorage = () => {
    const history = localStorage.getItem("history");
    if (!history) {
      const json = JSON.stringify([], undefined, 1);
      localStorage.setItem("history", json);
    }
  };
  return { initLocalStorage };
};

export default useInit;
