import './App.css';
import useDarkTheme from "./useDarkTheme"

function App() {
  // dark is the currently returned value of the custom hook
  // toggleDarkMode is the fn that you call to trigger the change of theme inside the custom hook
  const [dark, toggleDarkMode] = useDarkTheme();

  return ( 
    <div className="App">
      <h1>Dark theme is set to {dark ? "Dark" : "Light"}</h1>
      <button onClick={() => toggleDarkMode() }>Change dark theme</button>
    </div>
  );
}

export default App;
