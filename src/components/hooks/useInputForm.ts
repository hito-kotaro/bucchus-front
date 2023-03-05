import { menu } from "../../data/menu";

const useInputForm = () => {
  const pickMenu = (id: number) => {
    return menu.find((item) => item.id === id);
  };
  return { pickMenu };
};

export default useInputForm;
