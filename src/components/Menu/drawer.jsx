import MenuButton from "./MenuButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function CustomDrawer({ onClick }) {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <MenuButton text="Home" to="/" onClick={onClick}>
          <HomeIcon />
        </MenuButton>
        <MenuButton text="Categories" to="/categories" onClick={onClick}>
          <PaidIcon />
        </MenuButton>
        <MenuButton text="Expenses" to="/expenses" onClick={onClick}>
          <AttachMoneyIcon />
        </MenuButton>
        <MenuButton text="Profile" to="/profile" onClick={onClick}>
          <AccountCircleIcon />
        </MenuButton>
      </List>
    </div>
  );
}

export default CustomDrawer;

// const CustomDrawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         <MenuButton text="Home" to="/">
//           <HomeIcon />
//         </MenuButton>
//         <MenuButton text="Categories" to="/categories">
//             <PaidIcon />
//         </MenuButton>
//         <MenuButton text="Expenses" to="/expenses">
//             <AttachMoneyIcon />
//         </MenuButton>
//         <MenuButton text="Profile" to="/profile">
//             <AccountCircleIcon />
//         </MenuButton>
//       </List>
//     </div>
//   );

// export default CustomDrawer;
