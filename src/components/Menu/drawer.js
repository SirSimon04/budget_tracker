import MenuButton from "./MenuButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";

const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <MenuButton text="Home" to="/">
          <HomeIcon />
        </MenuButton>
        <MenuButton text="Categories" to="/categories">
            <PaidIcon />
        </MenuButton>
        <MenuButton text="Profile" to="/profile">
            <AccountCircleIcon />
        </MenuButton>
      </List>
    </div>
  );

  export default drawer;