import "./App.scss";
import { AppReduxProvider } from "./providers/AppReduxProvider";

function App() {
  return (
    <AppReduxProvider>
      <div className="App">
        <h1>Bookifly</h1>
      </div>
    </AppReduxProvider>
  );
}

export default App;
