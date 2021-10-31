import { BrowserRouter as Router } from "react-router-dom";
import { AppFooter } from "./components/common/AppFooter";
import { AppHeader } from "./components/common/AppHeader";
import { AppRouting } from "./routes/AppRouting";
import { OverlayProvider } from "./providers/OverlayProvider";
import { SidebarProvider } from "./providers/SidebarProvider";
import { AppReduxProvider } from "./providers/AppReduxProvider";
import "./App.scss";
import { CitiesProvider } from "./providers/CityProvider";

function App() {
  return (
    <AppReduxProvider>
      <CitiesProvider>
        <OverlayProvider>
          <SidebarProvider>
            <Router>
              <div className="App">
                <AppHeader />
                <AppRouting />
                <AppFooter />
              </div>
            </Router>
          </SidebarProvider>
        </OverlayProvider>
      </CitiesProvider>
    </AppReduxProvider>
  );
}

export default App;
