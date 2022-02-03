import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function HomePageCard({ name, title, icon, iconBg, children }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {name}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: iconBg,
                height: 56,
                width: 56
              }}
            >
              {icon}
            </Avatar>
          </Grid>
        </Grid>
        {children}
      </CardContent>
    </Card>
  );
}
export default HomePageCard;
