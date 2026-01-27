// Projects filtering functionality
function filterProjects() {
  const selectedTech = document.getElementById('tech-filter').value;
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    if (selectedTech === 'all') {
      card.style.display = '';
    } else {
      const technologies = card.getAttribute('data-technologies') || '';
      if (technologies.trim() === '') {
        card.style.display = 'none';
      } else {
        const techArray = technologies.split(',').map(t => t.trim());
        if (techArray.includes(selectedTech)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      }
    }
  });
}
