// Helper: get project id from URL
function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

// Render project details
function renderProject(project) {
  const container = document.getElementById("project-detail");
  if (!project) {
    container.innerHTML = "<p>Project not found.</p>";
    return;
  }

  container.innerHTML = `
    <section class="project-hero">
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <div class="project-info">
        <h1>${project.title}</h1>
        <p><strong>Problem Statement:</strong> ${project.problem}</p>
        <p><strong>Target Audience:</strong> ${project.audience}</p>
        <p><strong>Development Challenges:</strong> ${project.challenges}</p>
        <p><strong>Future Roadmap:</strong> ${project.roadmap}</p>
      </div>
    </section>
  `;
}

// Init
const projectId = getProjectId();
const project = projects.find(p => p.id === projectId);
renderProject(project);
