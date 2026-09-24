const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || 'There';

    formStatus.textContent = `Thanks, ${name}! Your message has been sent successfully.`;
    contactForm.reset();
  });
}
