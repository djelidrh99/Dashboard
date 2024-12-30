import Toolbar from "@mui/material/Toolbar";
import { styled} from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import DarkMode from "../../darkMode/DarkMode";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MuiAppBar from "@mui/material/AppBar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

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



export default function MyAppBar({handleDrawerOpen,open}) {
  return (

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
)
}
