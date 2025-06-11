// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Active class switching
    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scrollspy (highlight nav item on scroll)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
});

// Typing effect with loop and blinking cursor
const typingTexts = ["A Full Stack Developer!!", "A Tech Enthusiast!!", "An Innovator!!"];
let currentTextIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 150;        // Typing speed
const deletingSpeed = 80;       // Deleting speed
const pauseTime = 2000;         // Pause after full text
const typingTarget = document.querySelector(".typing");

function typeLoop() {
  if (!typingTarget) return;

  const currentText = typingTexts[currentTextIndex];
  if (isDeleting) {
    typingTarget.textContent = currentText.substring(0, charIndex--);
  } else {
    typingTarget.textContent = currentText.substring(0, charIndex++);
  }

  let timeout = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentText.length) {
    timeout = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
    timeout = 1000;
  }

  setTimeout(typeLoop, timeout);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingTarget) typingTarget.textContent = "";
  typeLoop();
});

// Message form handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const response = document.getElementById("form-response");
    response.style.display = "block";
    response.textContent = "✅ Your message has been sent successfully!";
    this.reset();
    setTimeout(() => {
      response.style.display = "none";
    }, 5000);
  });
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
