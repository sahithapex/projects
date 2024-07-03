
document.addEventListener('DOMContentLoaded', (event) => {
      const starContainer = document.getElementById('star-container');
      const stars = document.querySelectorAll('.star');
      const countElement = document.getElementById('count');
      let selectedRating = 0;
  
      starContainer.addEventListener('mouseover', (e) => {
          if (e.target.classList.contains('star')) {
              const index = parseInt(e.target.getAttribute('data-index'));
              fillStars(index);
          }
      });
  
      starContainer.addEventListener('mouseout', (e) => {
          fillStars(selectedRating);
      });
  
      starContainer.addEventListener('click', (e) => {
          if (e.target.classList.contains('star')) {
              selectedRating = parseInt(e.target.getAttribute('data-index'));
              countElement.textContent = selectedRating;
              fillStars(selectedRating);
          }
      });
  
      function fillStars(index) {
          stars.forEach((star, i) => {
              if (i < index) {
                  star.classList.add('star-filled');
              } else {
                  star.classList.remove('star-filled');
              }
          });
      }
  });
  