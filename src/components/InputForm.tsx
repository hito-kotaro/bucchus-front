import { Button, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { FC, useState } from "react";
import { menu } from "../data/menu";
import { MenuType } from "./types/OrderType";

type Props = {
  onClickOrder: (order: MenuType) => void;
  tooManyDrink: boolean;
};

const InputForm: FC<Props> = (props) => {
  const { onClickOrder, tooManyDrink } = props;
  const [order, setOrder] = useState<MenuType>({
    name: "",
    image: "",
  });

  const onlyWater: MenuType[] = [{ name: "水", image: "beer.png" }];
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
        <Autocomplete
          sx={{ width: "100%" }}
          // 注文ボタンを押した時に、選択を解除するためにvalueをstateで持たせている。
          // 選択解除のタイミングで、valueが""になってoption内に存在しない値となるので警告が出てしまう
          // ので常にtrueを返している
          isOptionEqualToValue={() => true}
          options={tooManyDrink ? onlyWater : menu}
          getOptionLabel={(option: MenuType) => option.name}
          onChange={(_, value) => {
            setOrder(value ?? { name: "", image: "" });
          }}
          value={order || null}
          id="clear-on-escape"
          clearOnEscape
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              variant="standard"
              placeholder="飲み物を選択"
              color="primary"
            />
          )}
        />

        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%", marginTop: "70px" }}
          onClick={() => {
            setOrder({
              name: "",
              image: "",
            });
            onClickOrder(order);
          }}
          disabled={order.name === ""}
        >
          <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
            注文
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default InputForm;
