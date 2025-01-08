/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/


const favoriteButton = document.getElementById('favoriteButton');

favoriteButton.addEventListener('click', function() {
  // Get the current item data (e.g., from the current page)
  let itemId = 'yourItemId'; // Replace with actual item ID
  // Check if the item is already in favorites (using localStorage)

  let favorites = JSON.parse(localStorage.getItem('favorites')) || []; 

  if (favorites.includes(itemId)) {

    // Remove from favorites

    favorites = favorites.filter(id => id !== itemId);

    // Update button appearance (e.g., change icon to unfilled heart)

  } else {
    // Add to favorites
    favorites.push(itemId);
    // Update button appearance (e.g., change icon to filled heart)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));

});
