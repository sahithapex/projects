import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TimelineIcon from "@mui/icons-material/Timeline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookIcon from "@mui/icons-material/Book";
import ExploreIcon from "@mui/icons-material/Explore";
import SettingsIcon from "@mui/icons-material/Settings";

const NavbarItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Create Habit Stack", icon: <AddCircleIcon />, path: "/create-habit" },
  { text: "Habit Progress", icon: <TimelineIcon />, path: "/habit-progress" },
  { text: "Rewards & Badges", icon: <EmojiEventsIcon />, path: "/rewards" },
  { text: "Reminders", icon: <NotificationsIcon />, path: "/reminders" },
  { text: "Habit Journal", icon: <BookIcon />, path: "/habit-journal" },
  { text: "Explore Templates", icon: <ExploreIcon />, path: "/explore", optional: true },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" }
];

export default NavbarItems;
