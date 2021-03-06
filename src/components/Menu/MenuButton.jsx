import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

function MenuButton({ children, text, to, onClick }) {
  return (
    <div>
      <ListItem button component={Link} to={to} onClick={onClick}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </div>
  );
}

export default MenuButton;
