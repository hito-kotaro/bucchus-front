import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { FC, useState } from "react";
import { menu, onlyWater } from "../data/menu";
import { screenText } from "../data/messages";
import useInputForm from "./hooks/useInputForm";
import { blankMenu, MenuType } from "./types/OrderType";

type Props = {
  onClickOrder: (order: MenuType) => void;
  tooManyDrink: boolean;
};

const InputForm: FC<Props> = (props) => {
  const { onClickOrder, tooManyDrink } = props;
  const { pickMenu } = useInputForm();
  const [order, setOrder] = useState<MenuType>(blankMenu);

  const handleChange = (event: SelectChangeEvent) => {
    setOrder(pickMenu(Number(event.target.value) ?? 0) ?? blankMenu);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "80%",
        }}
      >
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={String(order.id)}
            onChange={handleChange}
          >
            {tooManyDrink
              ? onlyWater.map((item: MenuType) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
              : menu.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>

        <Button
          data-testid="order-btn"
          variant="contained"
          color="secondary"
          sx={{ width: "100%", marginTop: "70px" }}
          onClick={() => {
            // toomanydrinkだったらビールをセット
            setOrder({
              id: 0,
              name: "None",
              image: "drinks/beer.png",
            });

            onClickOrder(order);
          }}
          disabled={order.name === "" || order.id === 0}
        >
          <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
            {screenText.orderButton}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default InputForm;
