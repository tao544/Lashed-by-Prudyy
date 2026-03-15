const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.getElementById('navbarNav');
const toggler = document.querySelector('.navbar-toggler');

// handle clicks on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // close the menu
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();

    // update active link
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// when collapse finishes hiding, reset toggler to hamburger
navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  toggler.classList.add('collapsed'); // ensures hamburger state
});

// testimonial fade effect
const reviews = document.querySelectorAll('.review');
let index = 0;

function showNextReview() {
  reviews[index].classList.remove('active');
  index = (index + 1) % reviews.length;
  reviews[index].classList.add('active');
}

setInterval(showNextReview, 3000); // every 3 seconds









