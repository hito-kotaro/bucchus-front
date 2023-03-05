/* eslint-disable react/no-array-index-key */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
import HistoryListItem from "../atoms/HistoryListItem";
import { OrderType } from "../types/OrderType";

type Props = {
  history: OrderType[];
};
const HistoryPage: FC<Props> = (props) => {
  const { history } = props;
  return (
    <>
      <Box
        bgcolor="#1D4062"
        sx={{
          height: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff" }}>
          History
        </Typography>
      </Box>
      <Box
        sx={{
          // bgcolor: "red",
          height: "70vh",
          padding: "4px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          boxShadow: "10",
          borderRadius: "10px",
          // borderEndEndRadius: "10px",
          // borderEndStartRadius: "10px",
          gap: "10px",
        }}
      >
        {history.map((h: OrderType, index: number) => (
          <HistoryListItem
            key={index}
            name={h.name}
            image={h.image}
            timestamp={h.timestamp}
          />
        ))}
      </Box>
    </>
  );
};

export default HistoryPage;
