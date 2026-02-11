let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a'); // all nav links

// toggle menu on icon click
menu.onclick = () => {
    menu.classList.toggle('bx-x');  
    navbar.classList.toggle('active');  
};

// hide navbar when a link is clicked
navLinks.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');    // reset menu icon
        navbar.classList.remove('active'); // hide navbar
    };
});



// ---------- NAVIGATION ACTIVE LINK + STICKY HEADER ----------
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  let top = window.scrollY;

  // Sticky header toggle
  if (header) header.classList.toggle('sticky', top > 100);

  // Active link highlight on scroll
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*='${id}']`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// ---------- SKILL BARS ANIMATION ON SCROLL ----------
document.addEventListener("DOMContentLoaded", () => {
  let animated = false;

  window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;

    const progressBars = document.querySelectorAll('.progress-bar span');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    // Trigger animation only once when section appears
    if (sectionPos < screenPos && !animated) {
      animated = true;
      progressBars.forEach(bar => {
        const match = bar.getAttribute('style')?.match(/width:\s*(\d+)%/);
        if (match) {
          const width = match[1];
          bar.style.width = '0%';
          bar.style.transition = 'none';
          setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.width = width + '%';
          }, 200);
        }
      });
    }
  });
});


let darkMode = document.querySelector('#darkMode');

darkMode.onclick = ()=>{
    darkMode.classList.toggle('bx-sun')
    document.body.classList.toggle('dark-mode')
}



        ScrollReveal({
             reset: true ,
             distance: '80px',
             duration: 2000,
             delay: 200
            
            });
           ScrollReveal().reveal('.home-content, .heading' , {origin:'top'});
           ScrollReveal().reveal('.skills-animation,.skills-container, .services-container, .portfolio-box, .contact form' , {origin:'bottom'});
           ScrollReveal().reveal('.home-content h1,.about-img img' , {origin:'left'});
           ScrollReveal().reveal('.home-content h3,.home-content p, .about-content' , {origin:'right'});

    document.getElementById("year").textContent = new Date().getFullYear();




    // ---------- EMAILJS CONTACT FORM WITH TOASTIFY ----------
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Initialize EmailJS (use your own public key)
  emailjs.init("3MbNhpdRfimG2CbXE");

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Send email using EmailJS
      emailjs.sendForm("service_9akwn84", "template_fnjviaj", this)
        .then(() => {
          // ✅ Success Toast
          Toastify({
            text: "Message sent successfully!",
            duration: 3000,
            close: true,
            gravity: "bottom", // "top" or "bottom"
            position: "right", // "left", "center" or "right"
            backgroundColor: "#5728f0ff",
            stopOnFocus: true,
          }).showToast();

          this.reset();
        })
        .catch((error) => {
          // ❌ Error Toast
          Toastify({
            text: "Failed to send message. Try again!",
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "right",
            backgroundColor: "#ff5f6d",
            stopOnFocus: true,
          }).showToast();

          console.error("EmailJS Error:", error);
        });
    });
  }
});
