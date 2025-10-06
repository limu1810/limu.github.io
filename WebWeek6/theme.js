// Theme loader for all pages
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else {
    // Always default to light mode if no theme is set
    document.documentElement.classList.remove('dark-theme');
  }
})();