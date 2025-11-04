// Scroll reveal for about & project rows
function revealOnScroll() {
  const projectGrids = document.querySelectorAll('.projects-grid');
  const contactItems = document.querySelectorAll('.contact-item');
  const windowHeight = window.innerHeight;
  projectGrids.forEach(projectGrid => {
    const rect = projectGrid.getBoundingClientRect();
    if (rect.top < windowHeight - 200) {
      projectGrid.classList.add('visible');
    }
  });
  contactItems.forEach(contactItem => {
    const rect = contactItem.getBoundingClientRect();
    if (rect.top < windowHeight - 50) {
      contactItem.classList.add('visible');
    }
  });

}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Intro loader
window.addEventListener("load", () => {
      const introLoader = document.getElementById("intro-loader");
      const introSound = document.getElementById("intro-sound");

      // Check if intro was already shown in this session
      if (!sessionStorage.getItem("introPlayed")) {
        // Play intro
        introSound.play().catch(err => console.log("Autoplay blocked:", err));

        // After 4s, fade out
        setTimeout(() => {
          introLoader.classList.add("fade-out");
          // After fade-out, hide completely
          setTimeout(() => {
            introLoader.style.display = "none";
          }, 1000);
        }, 4000);

        // Mark intro as played
        sessionStorage.setItem("introPlayed", "true");
      } else {
        // Skip intro instantly
        introLoader.style.display = "none";
      }
    });

