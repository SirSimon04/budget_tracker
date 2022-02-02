import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AppBar, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddButton() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [category, setCategory] = useState("");

  const changeCategory = event => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          marginLeft: "auto"
        }}
        onClick={handleOpen}
      >
        Add Expense
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen={isMobile}>
        {isMobile ? (
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add Expense
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        ) : (
          <DialogTitle>Add Expense</DialogTitle>
        )}
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                required
                margin="normal"
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Amount"
                variant="outlined"
                required
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required fullWidth sx={{ mt: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={changeCategory}
                  label="Category"
                >
                  <MenuItem value={"Food"}>Food</MenuItem>
                  <MenuItem value={"Clothing"}>Clothing</MenuItem>
                  <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {isMobile && (
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ marginRight: 2 }}
            >
              Schließen
            </Button>
          )}

          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ marginRight: 2 }}
          >
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddButton;
