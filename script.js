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
