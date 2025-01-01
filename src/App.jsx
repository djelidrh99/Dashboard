import { Routes, Route } from "react-router-dom";
import { useMode, ColorModeContext } from "./darkMode/theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MyDrawer from "./component/Drawer/Drawers";
import Dashboard from "./component/Pages/Dashboard/Dashboard";
import Team from "./component/Pages/Team/Team";
import Contacts from "./component/Pages/Contacts/Contacts";
import Invoices from "./component/Pages/Invoices/Invoices";
import CreateUser from "./component/Pages/CreateUser/CreateUser";
import Calendar from "./component/Pages/Calendar/Calendar";
import BarChart from "./component/Pages/Barchart/BarChart";
import PieChart from "./component/Pages/PieChart/PieChart";
import LineChart from "./component/Pages/LineChart/LineChart";
import GeographyChart from "./component/Pages/Geography/GeographyChart";
import Faq from "./component/Pages/Faq/Faq";
import "./App.css";
function App() {
  const [theme, colorMode] = useMode();

  
  return (
    
    <ThemeProvider
    theme={theme}
  >
    <ColorModeContext.Provider
      value={colorMode}
    >
     
        <CssBaseline />
        <Routes>
          <Route path="/" element={<MyDrawer />}>
          <Route index element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/ManageTeam" element={<Team />} />
            <Route path="/ContactInformation" element={<Contacts />} />
            <Route path="/InvoiceBalences" element={<Invoices/>} />
            <Route path="/ProfileForm" element={<CreateUser />} />
            <Route path="/Calender" element={<Calendar />} />
            <Route path="/FaqPage" element={<Faq />} />
            <Route path="/BarChart" element={<BarChart />} />
            <Route path="/PieChart" element={<PieChart />} />
            <Route path="/LineChart" element={<LineChart />} />
            <Route path="/GeographyChart" element={<GeographyChart/>} />
          </Route>
        </Routes>
     
    </ColorModeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
