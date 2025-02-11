document.addEventListener("DOMContentLoaded", function() {
  // Scroll to Top Button
  let scrollTopBtn = document.createElement("div");
  scrollTopBtn.id = "scrollTop";
  scrollTopBtn.innerHTML = "↑";
  document.body.appendChild(scrollTopBtn);

  window.addEventListener("scroll", function() {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth Scroll on Navbar Links
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 10; // 10px extra spacing
      
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth"
            });
          }
        });
      });
      

      // Close the menu on mobile
      if (window.innerWidth <= 768) {
        navbarUl.classList.remove('show');
        menuToggle.classList.remove('open');
      }
    });
  });

 // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navbarUl = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', function() {
    navbarUl.classList.toggle('show');
    menuToggle.classList.toggle('open');
  });

  // Highlight Active Section in Navbar
  function highlightActiveSection() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".navbar a");

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        links[index].classList.add("active");
      } else {
        links[index].classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightActiveSection);
});

// JavaScript for toggling the mobile menu
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.getElementById('navbarLinks');

menuToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('show');
  menuToggle.classList.toggle('open');
});
