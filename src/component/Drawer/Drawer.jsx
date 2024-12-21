import { Outlet } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import DarkMode from "../../darkMode/DarkMode";

// icon sidebar
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

// css import
import './ActiveLink.css'
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        // @ts-ignore
        open={open}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexGrow: 1,
            }}
            component="div"
          >
            <Typography variant="h6"> Mini variant drawer</Typography>
            <Stack alignItems="center" direction="row">
              <DarkMode />
              <IconButton>
                <NotificationsNoneOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <SettingsOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <Person2OutlinedIcon sx={{ color: "white" }} />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
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
        <List>
          {[
            { title: "Dashboard", icon: <HomeOutlinedIcon /> },
            { title: "Manage Team", icon: <GroupOutlinedIcon /> },
            { title: "Contact Information", icon: <ContactsOutlinedIcon /> },
            { title: "Invoice Balences", icon: <ReceiptOutlinedIcon /> },
          ].map((element, index) => (
            <NavLink
              key={element.title}
              className={({isActive})=>isActive ? "activeLink":""}

              style={ 
                
                   {
                      display:"block",
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      
                    }
                   
              }
              to={`/${element.title
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")}`}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {element.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={element.title}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { title: "Profile Form", icon: <Person2OutlinedIcon /> },
            { title: "Calender", icon: <CalendarMonthOutlinedIcon /> },
            { title: "Faq Page", icon: <QuestionMarkOutlinedIcon /> },
          ].map((element, index) => (
            <NavLink
              key={element.title}
              className={({isActive})=>isActive ? "activeLink":""}

              style={ 
                
                   {
                      display:"block",
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      
                    }
                   
              }
              to={`/${element.title
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")}`}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {element.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={element.title}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { title: "Bar Chart", icon: <BarChartOutlinedIcon /> },
            { title: "Pie Chart", icon: <PieChartOutlineOutlinedIcon /> },
            { title: "Line Chart", icon: <TimelineOutlinedIcon /> },
            { title: "Geography Chart", icon: <MapOutlinedIcon /> },
          ].map((element, index) => (
            <NavLink
              key={element.title}
              className={({isActive})=>isActive ? "activeLink":""}

              style={ 
                
                   {
                      display:"block",
                      textDecoration: "none",
                      color: theme.palette.text.primary,
                      
                    }
                   
              }
              to={`/${element.title
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")}`}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: "initial",
                        }
                      : {
                          justifyContent: "center",
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: "center",
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          },
                    ]}
                  >
                    {element.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={element.title}
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}
