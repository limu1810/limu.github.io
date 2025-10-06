// Show a popup on first visit to the home page about local data usage
(function() {
  if (!localStorage.getItem('seenLocalDataPopup')) {
    // Create popup elements
    const popup = document.createElement('div');
    popup.id = 'local-data-popup';
    popup.innerHTML = `
      <div class="popup-content">
        <h3 style="font-family: 'helvetica-neue-lt-pro', sans-serif;">Notice</h3>
        <p style="font-family: 'helvetica-neue-lt-pro', sans-serif;">For your convenience this site stores your prefrences in your browsers local storage. No personal data is collected. To clear your local storage on the site see the settings page</p>
        <button id="close-popup">OK</button>
      </div>
    `;
    document.body.appendChild(popup);
    document.body.style.overflow = 'hidden';
    document.getElementById('close-popup').onclick = function() {
      popup.remove();
      document.body.style.overflow = '';
      localStorage.setItem('seenLocalDataPopup', 'yes');
    };
  }
})();
