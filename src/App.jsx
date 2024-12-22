import Pageone from "./component/Pageone";
import MiniDrawer from "./component/Drawer/Drawer";
import { Routes, Route } from "react-router-dom";
import Pagetwo from "./component/Pagetwo";
import { useMode, ColorModeContext } from "./darkMode/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MyDrawer from "./component/Drawer/Drawers";
import Dashboard from "./component/Pages/Dashboard/Dashboard";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MyDrawer />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ManageTeam" element={<Pagetwo />} />
            <Route path="/ContactInformation" element={<Pageone />} />
            <Route path="/InvoiceBalences" element={<Pagetwo />} />
            <Route path="/ProfileForm" element={<Pageone />} />
            <Route path="/Calender" element={<Pagetwo />} />
            <Route path="/FaqPage" element={<Pageone />} />
            <Route path="/BarChart" element={<Pagetwo />} />
            <Route path="/PieChart" element={<Pageone />} />
            <Route path="/LineChart" element={<Pagetwo />} />
            <Route path="/GeographyChart" element={<Pageone />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
