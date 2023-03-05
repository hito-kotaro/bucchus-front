import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { screenText } from "../data/messages";

type Props = {
  isMain: boolean;
  toggleMain: () => void;
  reset: () => void;
};
const Header: FC<Props> = (props) => {
  const { isMain, toggleMain, reset } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h5">{screenText.resetNoticeTitle}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography
              variant="body2"
              // color="#1D4062"
              sx={{ fontWeight: "bold" }}
            >
              {screenText.resetNotice}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClose}
            sx={{ fontWeight: "bold" }}
          >
            {screenText.cancelButton}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleClose();
              reset();
            }}
          >
            {screenText.agreeButton}
          </Button>
        </DialogActions>
      </Dialog>
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
              {screenText.logo}
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
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Reset
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
