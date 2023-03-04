import { Button, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { FC, useState } from "react";
import { MenuType } from "./types/OrderType";

type Props = {
  onClickOrder: (order: MenuType) => void;
};

const InputForm: FC<Props> = (props) => {
  const { onClickOrder } = props;
  const [order, setOrder] = useState<MenuType>({
    name: "ビール",
    image: "beer.png",
  });

  const menu: MenuType[] = [
    { name: "ビール", image: "beer.png" },
    { name: "ハイボール", image: "highball.png" },
  ];

  const isOptionEqualToValue = (option: MenuType, value: MenuType) => {
    return option.name === value.name;
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
        <Autocomplete
          sx={{ width: "100%" }}
          isOptionEqualToValue={isOptionEqualToValue}
          options={menu}
          getOptionLabel={(option: MenuType) => option.name}
          onChange={(_, value) => {
            setOrder(value ?? { name: "", image: "" });
          }}
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
          onClick={() => onClickOrder(order)}
          disabled={order!.name === ""}
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
