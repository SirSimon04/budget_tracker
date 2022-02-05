import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme
} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MovieIcon from "@mui/icons-material/Movie";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function CategoryChart(props) {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ["#89CFF0", "#e53935", "#FB8C00"],
        borderWidth: 8,
        borderColor: theme.palette.background.paper,
        hoverBorderColor: theme.palette.text.secondary
      }
    ],
    labels: ["Food", "Clothing", "Entertainment"]
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary
    }
  };

  //for legend on bottom
  const devices = [
    {
      title: "Food",
      value: 63,
      icon: LocalDiningIcon,
      color: "#89CFF0"
    },
    {
      title: "Clothing",
      value: 15,
      icon: ShoppingBasketIcon,
      color: "#E53935"
    },
    {
      title: "Entertainment",
      value: 23,
      icon: MovieIcon,
      color: "#FB8C00"
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Expenses by category" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative"
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center"
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CategoryChart;
