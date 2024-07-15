// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.


// index.js

document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
          const imagesContainer = document.getElementById('dog-image-container');

          data.message.forEach(imageUrl => {
              const imgElement = document.createElement('img');
              imgElement.src = imageUrl;
              imagesContainer.appendChild(imgElement);
          });
      })
      .catch(error => {
          console.error('Error fetching dog images:', error);
      });
});


// Continuing from index.js

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breedsList = document.getElementById('dog-breeds');

        for (let breed in data.message) {
            const breedItem = document.createElement('li');
            breedItem.textContent = breed;
            breedsList.appendChild(breedItem);
        }
    })
    .catch(error => {
        console.error('Error fetching dog breeds:', error);
    });

    // Continuing from index.js

document.addEventListener('DOMContentLoaded', function() {
  // Code from Challenges 1 and 2 here...

  const breedsList = document.getElementById('dog-breeds');

  breedsList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
          event.target.style.color = 'blue'; // Change color to your choice
      }
  });
});

// Continuing from index.js

document.addEventListener('DOMContentLoaded', function() {
  // Code from Challenges 1, 2, and 3 here...

  const filterDropdown = document.getElementById('breed-dropdown');

  filterDropdown.addEventListener('change', function(event) {
      const selectedLetter = event.target.value;
      const breedItems = breedsList.getElementsByTagName('li');

      for (let breedItem of breedItems) {
          const breedName = breedItem.textContent.toLowerCase();
          if (breedName.startsWith(selectedLetter)) {
              breedItem.style.display = 'list-item';
          } else {
              breedItem.style.display = 'none';
          }
      }
  });
});

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});
