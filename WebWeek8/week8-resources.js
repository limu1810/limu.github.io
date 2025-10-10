  // Dropdown menu logic (if used)
  const dropdown = document.querySelector('.div6');
  const menu = document.querySelector('.drop-menu');
  if (dropdown && menu) {
    dropdown.addEventListener('mouseenter', () => {
      menu.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
      menu.style.display = 'none';
    });
  }

  // Theme switcher logic
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme');
      themeToggle.textContent = 'Dark';
    } else {
      document.documentElement.classList.remove('dark-theme');
      themeToggle.textContent = 'Original';
    }
    // Remove any fixed positioning if present
    if (themeToggle.style.position === 'fixed') themeToggle.style.position = '';
  }

  // Initialize theme
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme('light');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-theme');
    const theme = isDark ? 'dark' : 'light';
    setTheme(theme);
    localStorage.setItem('theme', theme);
  });

  // Clear Local Data button logic
  const clearBtn = document.getElementById('clear-local-data');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.clear();
      alert('Local data cleared. Reload the page to see changes.');
    });
  }