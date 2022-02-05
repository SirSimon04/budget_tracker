import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  Typography
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

function IncomeTimelineView() {
  return (
    <div>
      <Card>
        <CardHeader title="Income" />
        <Divider />
        <CardContent>
          <Timeline>
            {[
              "1/1/2021",
              "2/1/2021",
              "3/1/2021",
              "4/1/2021",
              "5/1/2021",
              "6/1/2021",
              "7/1/2021",
              "8/1/2021"
            ].map((date, index) => (
              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ pt: 2.5 }}
                >
                  {date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="success">
                    <WorkIcon />
                  </TimelineDot>
                  {index !== 7 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent sx={{ pt: 2.5 }}>
                  {currencyFormatter.format("3000")}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </div>
  );
}

export default IncomeTimelineView;
