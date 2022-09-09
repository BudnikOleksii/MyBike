'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  feedbackForm.reset();
});
