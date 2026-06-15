document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! We\'ll get back to you shortly.');
  this.reset();
});