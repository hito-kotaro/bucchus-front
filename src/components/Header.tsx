import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  isMain: boolean;
  toggleMain: () => void;
  reset: () => void;
};
const Header: FC<Props> = (props) => {
  const { isMain, toggleMain, reset } = props;
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "40px",
            width: "40px",
            borderRadius: "10px",
            boxShadow: "5",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              // bgcolor: "blue",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            B
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            sx={{ color: "#1D4062", fontWeight: "bold" }}
            onClick={toggleMain}
          >
            {isMain ? "history" : "main"}
          </Button>

          <Button
            variant="contained"
            type="button"
            color="secondary"
            sx={{ color: "#1D4062", fontWeight: "bold" }}
            onClick={reset}
          >
            Reset
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
