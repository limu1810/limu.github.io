  const dropdown = document.querySelector('.div6');
    const menu = document.querySelector('.drop-menu');

    // Show menu on mouse enter
    dropdown.addEventListener('mouseenter', () => {
      menu.style.display = 'block';
    });

    // Hide menu on mouse leave
    dropdown.addEventListener('mouseleave', () => {
      menu.style.display = 'none';
    });