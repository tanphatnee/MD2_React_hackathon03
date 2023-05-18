// Component SearchBar
function SearchBar({ searchKeyword, setSearchKeyword }) {
    const handleSearchChange = (event) => {
      setSearchKeyword(event.target.value);
    };
  
    return (
      <input
        type="text"
        placeholder="Search here..."
        value={searchKeyword}
        onChange={handleSearchChange}
      />
    );
}
  
export default SearchBar;