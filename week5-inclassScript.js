const expandBtn = document.querySelector('.expand-btn');
const details = document.querySelector('.details');

expandBtn.addEventListener('click', () => {
  const isHidden = details.classList.toggle('hidden');
  
  if (isHidden) {
    expandBtn.textContent = '+';
    expandBtn.setAttribute('aria-label', 'Expand card');
  } else {
    expandBtn.textContent = '-'; 
    expandBtn.setAttribute('aria-label', 'Collapse card');
  }

  
});
