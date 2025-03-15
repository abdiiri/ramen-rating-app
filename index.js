const ramens = [
  { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
  { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
  { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 5, comment: "Best I've ever had!" }
];

function displayRamens() {
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = ""; // Clear previous content if any

  ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id; // Store ramen id in data attribute
    img.addEventListener('click', handleClick);
    ramenMenu.appendChild(img);
  });
}
function handleClick(event) {
  const ramenId = event.target.dataset.id;
  const ramen = ramens.find(r => r.id == ramenId);

  document.getElementById('detail-image').src = ramen.image;
  document.getElementById('detail-name').textContent = `Name: ${ramen.name}`;
  document.getElementById('detail-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
  document.getElementById('detail-rating').textContent = `Rating: ${ramen.rating}`;
  document.getElementById('detail-comment').textContent = `Comment: ${ramen.comment}`;
}


function addSubmitListener() {
  const form = document.getElementById('ramen-form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const restaurant = document.getElementById('restaurant').value;
    const image = document.getElementById('image').files[0].name; // Assuming the image is stored locally
    const rating = parseInt(document.getElementById('rating').value);
    const comment = document.getElementById('comment').value;

    // Create new ramen object and push to array
    const newRamen = {
      id: ramens.length + 1,
      name,
      restaurant,
      image,
      rating,
      comment
    };
    
    ramens.push(newRamen);
    displayRamens(); // Re-render ramen menu
  });
}


function main() {
  displayRamens(); // Display the initial list of ramens
  addSubmitListener(); // Handle form submission for adding new ramen
}

// Ensure the DOM content is fully loaded before initializing
document.addEventListener('DOMContentLoaded', main);

