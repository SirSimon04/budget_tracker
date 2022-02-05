import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  Typography,
  Tooltip
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { currencyFormatter } from "../../../../utils";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MovieIcon from "@mui/icons-material/Movie";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WorkIcon from "@mui/icons-material/Work";

function ExpenseTimeLineView() {
  return (
    <div>
      <Card>
        <CardHeader title="Expenses" />
        <Divider />
        <CardContent>
          <Timeline>
            {[
              {
                date: "1/11/2021",
                icon: <LocalDiningIcon />,
                amount: "40",
                des: "Party with friends"
              },
              {
                date: "2/23/2021",
                icon: <MovieIcon />,
                amount: "15",
                des: "Cinema"
              },
              {
                date: "3/31/2021",
                icon: <ShoppingBasketIcon />,
                amount: "100",
                des: "New Hoodie"
              },
              {
                date: "4/21/2021",
                icon: <LocalDiningIcon />,
                amount: "100",
                des: "Diner with family"
              },
              {
                date: "5/12/2021",
                icon: <MovieIcon />,
                amount: "50",
                des: "Cinema with restaurant"
              },
              {
                date: "6/21/2021",
                icon: <LocalDiningIcon />,
                amount: "7",
                des: "Kebab"
              }
            ].map((data, index) => (
              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ pt: 2.5 }}
                >
                  {data.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <Tooltip title={data.des} arrow>
                    <TimelineDot color="error">{data.icon}</TimelineDot>
                  </Tooltip>

                  {index !== 5 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent sx={{ pt: 2.5 }}>
                  {currencyFormatter.format(data.amount)}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </div>
  );
}

export default ExpenseTimeLineView;
