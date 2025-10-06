// Show a popup on first visit to the home page about local data usage
(function() {
  if (!localStorage.getItem('seenLocalDataPopup')) {
    // Create popup elements
    const popup = document.createElement('div');
    popup.id = 'local-data-popup';
    popup.innerHTML = `
      <div class="popup-content">
        <h3>Notice</h3>
        <p>This site saves your theme and settings in your browser's local storage for a better experience. No personal data is collected.</p>
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
