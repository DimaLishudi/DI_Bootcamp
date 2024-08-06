import "./App.css";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

// 🌟 Exercise 1: Implement a Theme Switcher
// Instructions
// Objective: Create a theme switcher component that allows users to toggle between light and dark themes using useContext and useState.
// Set up a new React project using create-react-app or your preferred method.
// Create a context for managing the theme (light/dark mode).
// Implement a theme switcher component that toggles between light and dark themes when clicked.
// Use useContext to access the current theme in other components and apply the theme styles.

// Hints:
// You can create a context with a default theme value (e.g., light) and a function to toggle the theme.
// The theme switcher component should have a button that, when clicked, calls the theme toggling function provided by the context.
// Apply different styles (CSS or inline styles) to your components based on the current theme.

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function CookingList() {
  const { theme } = useTheme();

  return (
    <ul className={theme}>
      <li>Bread</li>
      <li>Milk</li>
    </ul>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <CookingList />
      </div>
    </ThemeProvider>
  );
}

export default App;
