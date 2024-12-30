import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Links from "./Links";

// icon sidebar
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MyAppBar from "./AppBar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function MyDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const linksOne = [
    { title: "Dashboard", icon: <HomeOutlinedIcon /> },
    { title: "Manage Team", icon: <GroupOutlinedIcon /> },
    { title: "Contact Information", icon: <ContactsOutlinedIcon /> },
    { title: "Invoice Balences", icon: <ReceiptOutlinedIcon /> },
  ]

  const linksTwo= [
         { title: "Profile Form", icon: <Person2OutlinedIcon /> },
         { title: "Calender", icon: <CalendarMonthOutlinedIcon /> },
         { title: "Faq Page", icon: <QuestionMarkOutlinedIcon /> },
       ]

  const linkThree= [
    { title: "Bar Chart", icon: <BarChartOutlinedIcon /> },
    { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon /> },
    { title: "Line Chart", icon: <TimelineOutlinedIcon /> },
    { title: "Geography Chart", icon: <MapOutlinedIcon /> },
  ]

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
     <MyAppBar handleDrawerOpen={handleDrawerOpen} open={open}/>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            pt: 2,
            pb: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Avatar
              sx={open ? { width: 76, height: 76 } : { width: 36, height: 36 }}
              alt="Remy Sharp"
              src="public\_DSC2649 copie (1).jpg"
            />
            <Typography
              sx={
                open
                  ? { textAlign: "center", mt: 2, fontWeight: "bold" }
                  : { display: "none" }
              }
            >
              Djelid rh
            </Typography>
            <Typography
              color="primary"
              sx={
                open
                  ? { textAlign: "center", fontWeight: "bold" }
                  : { display: "none" }
              }
            >
              Admin
            </Typography>
          </Box>
        </Box>
        <Divider />
       <Links isOpen={open} link={linksOne}/>
       <Divider />
       <Links isOpen={open} link={linksTwo}/>
       <Divider />
       <Links isOpen={open} link={linkThree}/>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3,minWidth:"1000px" }}>
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}
