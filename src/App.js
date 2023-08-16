import { Box, Stack, createTheme } from "@mui/material";
import { Feed } from "./Components/feed";
import { Navbar } from "./Components/navbar";
import { Rightbar } from "./Components/rightbar";
import { Sidebar } from "./Components/sidebar";
import { Add } from "./Components/add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }  
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
