// Basic interactivity: nav toggle, year, simple contact validation
document.addEventListener('DOMContentLoaded', function(){
  // Nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', function(){
    const expanded = nav.style.display === 'flex' || nav.classList.contains('open');
    if(!expanded){
      nav.style.display = 'flex';
      nav.classList.add('open');
    } else {
      nav.style.display = '';
      nav.classList.remove('open');
    }
  });

  // Close mobile nav when clicking a link
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
    if(window.innerWidth <= 700){ nav.style.display = ''; nav.classList.remove('open'); }
  }));

  // Set current year in footer
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Contact form with client-side validation before Formspree submission
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  if(form){
    form.addEventListener('submit', function(e){
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        e.preventDefault();
        msg.textContent = 'Please fill in all fields.';
        msg.style.color = '#fca5a5';
        return;
      }
      // Clear any previous error messages
      msg.textContent = 'Sending...';
      msg.style.color = 'var(--muted)';
      // Form will submit to Formspree automatically
    });
    
    // Check for Formspree success param in URL (after redirect)
    const params = new URLSearchParams(window.location.search);
    if(params.has('success') || window.location.hash.includes('success')){
      msg.textContent = 'Thanks for reaching out! I\'ll get back to you soon.';
      msg.style.color = '#86efac';
    }
  }
});
