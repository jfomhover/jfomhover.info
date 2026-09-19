// Projects filtering functionality
function filterProjects() {
  const selectedTech = document.getElementById('tech-filter').value;
  const projectCards = document.querySelectorAll('.project-card');
  const status = document.getElementById('project-status');
  let visible = 0;
  
  projectCards.forEach(card => {
    if (selectedTech === 'all') {
      card.hidden = false;
    } else {
      const technologies = card.getAttribute('data-technologies') || '';
      if (technologies.trim() === '') {
        card.hidden = true;
      } else {
        const techArray = technologies.split(',').map(t => t.trim());
        if (techArray.includes(selectedTech)) {
          card.hidden = false;
        } else {
          card.hidden = true;
        }
      }
    }
    if (!card.hidden) visible += 1;
  });
  if (status) status.textContent = visible + (visible === 1 ? ' project' : ' projects');
}
