/**
 * 
 */
// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//-------------------------- Animate progress bars on scroll skills--------------------------------
document.querySelectorAll('.progressbar__svg-circle1').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle2').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle3').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle4').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 70; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle5').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 70; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle6').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle7').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle8').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});
document.querySelectorAll('.progressbar__svg-circle9').forEach((circle, index) => {
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const progress = 90; // Example progress value, you can set this dynamically
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
});

/**------------------------------------------------------contact form--------------------------------- */

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Form submitted successfully');
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form');
    });
});

 /**---------------------------------mobile menu----------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');    
    const navList = document.querySelector('.nav-list');
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');        
        menuToggle.classList.toggle('active');
    });
 });

/** -----------------------------------download Resume-------------------------------------------------- */
document.getElementById("downloadResume").addEventListener("click", function() {
        window.location.href = '/pdf/re.pdf';
    });
















 


