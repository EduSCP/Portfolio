// Helper function to create a card element
function createCard(project) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <a href="project.html?id=${project.id}">
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
    </a>
  `;
  return card;
}

// Render projects in their categories
projects.forEach(project => {
  project.categories.forEach(category => {
    const container = document.getElementById(category);
    if (container) {
      container.appendChild(createCard(project));
    }
  });
});
// Scroll reveal for about & project rows
function revealOnScroll() {
  const sections = document.querySelectorAll('.about-section, .row');
  const windowHeight = window.innerHeight;
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

