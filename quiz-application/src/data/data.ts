import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

export const SideBarData = [
  {
    icon: HomeOutlinedIcon,
    heading: "All Quizes",
    to: "/"
  },
  {
    icon: HelpOutlineIcon,
    heading: "All Quiz Questions",
    to: "/questions"
  },
  {
    icon: PeopleOutlinedIcon,
    heading: "Users",
    to: "/users"
  },
  {
    icon: Inventory2OutlinedIcon,
    heading: "New Quiz",
    to: "add/quiz"
  },
  {
    icon: AnalyticsOutlinedIcon,
    heading: "Quiz Scores",
    to: "quiz/score"
  },
];
