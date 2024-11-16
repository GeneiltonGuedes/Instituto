// Função para rolar até a seção de "Sobre Nós"
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  // Função para mostrar um alerta no botão de contato
  function showAlert() {
    alert("Obrigado por visitar! Entre em contato conosco!");
  }
  
  // Efeito Parallax
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
  });
  
  // Aplica efeito de aparecimento suave para as seções
  const sections = document.querySelectorAll('section');
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
  
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  });
  