// Component DarkModeToggle
function DarkModeToggle({ darkMode, setDarkMode }) {
    const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
    };
  
    return (
      <button onClick={handleDarkModeToggle}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
}
  
export default DarkModeToggle;