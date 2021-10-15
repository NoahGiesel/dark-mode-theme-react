import './App.css';
import useDarkTheme from "./useDarkTheme"

function App() {
  const [dark, toggleDarkMode] = useDarkTheme();

  return (
    <div className="App">
      <h1>Dark theme is set to {dark ? "Dark" : "Light"}</h1>
      <button onClick={() => toggleDarkMode() }>Change dark theme</button>
    </div>
  );
}

export default App;
