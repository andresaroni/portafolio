document.addEventListener("DOMContentLoaded", () => {
    
  const menuToggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".links");
  const header = document.querySelector("header");
  const rincon_peruano = document.getElementById("rincon_peruano")

  menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    links.classList.toggle("active");
    links.classList.toggle("scrolled")
    header.classList.toggle("menu-open");

  });

  document.querySelectorAll(".links a").forEach((link) => {

    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        links.classList.remove("active");
        header.classList.remove("menu-open");
    });

  });

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
         header.classList.remove("scrolled");
    }

  });

  rincon_peruano.addEventListener("click", () =>{

    window.open("https://elrinconperuano-restaurant.com", "_blank");

  });

  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
  
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
          }
      });
  
  }, observerOptions);
  
  document.querySelectorAll('.contenedor, nav').forEach((el) => {
  
      el.style.opacity = 0;
      el.style.transform = 'translateY(100px)';
      el.style.transition = 'all 0.8s ease-out';
      observer.observe(el);
  
  });
  
  document.querySelectorAll('.hero-content, .carta-skills, .precios, .proyectos').forEach((el) => {
  
      el.style.opacity = 0;
      el.style.transform = 'translateX(-100px)';
      el.style.transition = 'all 0.8s ease-out';
      observer.observe(el);
  
  });

});





