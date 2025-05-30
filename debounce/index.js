// Debounce utility function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Simulated search function
  function search(query) {
    if (!query.trim()) return;
  
    // Log instead of displaying
    console.log(`Searching for: "${query}"`);
  }
  
  // Get reference to input field
  const searchBox = document.getElementById("searchBox");
  
  // Wrap the search function in debounce
  const debouncedSearch = debounce(function (event) {
    search(event.target.value);
  }, 500);
  
  // Add input event listener
  searchBox.addEventListener("input", debouncedSearch);
  